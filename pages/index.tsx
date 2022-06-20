import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import H1 from '../components/heading/H1'
import HomeSection from '../components/home'
import Layout from '../components/Layout'
import api from '../services/api'

const Home: NextPage = () => {
  const [ sellsDay, setSellsDay ] = useState<number>();
  const [ sellsMonth, setSellsMonth ] = useState<number>();

  useEffect(() => {
    api.get('/day').then(res => {
      const day = res.data.data[0];

      if(day) {
        setSellsDay(day);
      } else {
        setSellsMonth(0);
      }
    });

    api.get('/month').then(res => {
      const month = res.data.data[0]['sum(valor)'];

      if(month) {
        setSellsMonth(month);
      } else {
        setSellsMonth(0);
      }
    })
  }, []);

  return (
    <Layout>
      <>
        <H1>
          Bem vinda
        </H1>
        
        {(sellsDay && sellsMonth) && (
          <HomeSection 
            totalSales={{day: sellsDay, month: sellsMonth}}
          />
        )}
      </>
    </Layout>
  )
}

export default Home;