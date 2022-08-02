import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {

  const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return <>

    <article>
      {
        data?.cohort?.map(s => {
          return <>
            <div className="student_name">{s.name}</div>
            <div className="student_funFact">{s.funFact}</div>
            <div className="student_email">{s.email}</div>
            <div className="student_githubAccount">{s.githubAccount}</div>
            <a href={s.linkedinAccount} target="_blank"> Linkedin Icon</a>
            <div className="student_learnMoreAboutMeDescribeYourStrongSuits">{s.learnMoreAboutMeDescribeYourStrongSuits}</div>
            <div className="student_favoriteExperienceNssRelated">{s.favoriteExperienceNssRelated}</div>
            <div className="student_whereAreYouLocatedCityState">{s.whereAreYouLocatedCityState}</div>
            <br />
          </>
        })
      }
    </article>
  </>

}

