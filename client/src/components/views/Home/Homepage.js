import React from 'react';

import { AllProducts } from '../../features/AllProducts/AllProducts';
import styles from './Homepage.module.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

class Component extends React.Component {

  scrollDown() {

    const box = document.getElementById('content') != null ? document.getElementById('content') : window;

    box.scroll({ top: window.innerHeight * .93, behavior: 'smooth' });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.welcomeBox}>
          <div className={styles.scrollDown} onClick={() => this.scrollDown()} >
            <KeyboardArrowDownIcon className={styles.arrowIcon} />
          </div>
        </div>
        <section className={styles.about}>
          <h2>O nas</h2>
          <p>
          P.P.H.U. Madax - jesteśmy istniejącą od 1999 roku rodzinną firmą specjalizującą się w sprzedaży artykułów BHP: <br />
            <li>odzieży roboczej</li>
            <li>butów roboczych</li>
            <li>rękawic roboczych</li>
            <li>środków czystości</li>
            <li>innych produktów z zakresu asortymentu BHP</li>
          Od 20 lat z najwyższą starannością wykonujemy swoją pracę, aby dostarczać naszym klientom towary o odpowiedniej jakości.
          Od 2019 roku nasza firma jest członkiem BNI (Business Network International), a więc jednej z największych na świecie
          organizacji rekomendacji biznesowych. Każdego tygodnia spotykamy się z renomowanymi przedsiębiorcami, nawiązujemy nowe
          kontakty i zdobywamy bezcenne doświadczenia. Wszystko po to, aby nasza firma rozwijała się, a świadczone przez nas usługi
          stały na najwyższym poziomie. Przynależność do BNI to niewątpliwie duży zaszczyt i potwierdzenie naszej wiarygodności.
          </p>
        </section>
        <AllProducts />
      </div>
    );
  }
}
export {
  Component as Homepage,
  Component as HomepageComponent,
};
