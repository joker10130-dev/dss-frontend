import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Review from './Review';

const Detail = (props) => {
  const [detail, setDetail] = useState('');
  const [comment, setComment] = useState([]);
  const [lineData, setLineData] = useState({});
  const [loading, isLoading] = useState(false);
  const lineOption = {
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: 'Confidence Data Statistic',
        fontSize: 25,
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const url = 'http://localhost:5000/api/datas/';

  useEffect(() => {
    const load = async () => {
      try {
        let c = [];
        let con = [];
        let t = [];
        const res = await axios.get(url + props.match.params.name);
        console.log(res.data);
        const result = res.data;

        for (let i = 0; i < result.data.length; i++) {
          c.push(result.data[i].comment);
          con.push(result.data[i].confidence);
          t.push(result.data[i].timeStamp);
        }
        setComment(c);
        // setConfidence(con);
        // setTime(t);
        setDetail(result);
        setLineData({
          labels: t,
          datasets: [
            {
              label: 'Confidence',
              data: con,
              borderWidth: 3,
              backgroundColor: [
                'rgba(46, 185, 195, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
              ],
            },
          ],
        });
      } catch (error) {
        console.log(`Error fetch data: ${error}`);
        throw error;
      }
    };
    load();
  }, [props.match.params.name, url]);

  const updateStatistic = async () => {
    console.log('updating');
    isLoading(true);
    await axios.post(url + `${props.match.params.name}`).then(() => {
      isLoading(false);
    });
    window.location.reload(false);
  };

  return (
    <section class='white-section' id='detail'>
      <div className='container-fluid'>
        <h1>{detail.name}</h1>
        <div className='row'>
          <div className='col-sm-6'>
            <img className='res-img' src={detail.imgUrl} alt='' width='100%' />
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-header'>All Comment</div>
              <div className='card-body scroll'>
                {comment.map((r, i) => (
                  <ul key={i} align='left'>
                    <li>{r}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div id='Graph'>
              <Line data={lineData} options={lineOption.options} />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='btn btn-info mb-4' onClick={updateStatistic}>
              {loading && <i className='fa fa-refresh fa-spin'></i>}
              {loading && <span> Updating Data</span>}
              {!loading && <span>Update Comment and Confidence score</span>}
            </div>
          </div>
        </div>
        <Review />
      </div>
    </section>
  );
};

export default Detail;
