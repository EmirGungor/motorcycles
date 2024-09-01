import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import RS200 from "./img/rs200.jpg";
import D400 from "./img/d400.jpg";
import R25 from "./img/r25.jpg";
import MT25 from "./img/mt25.jpg";

function App() {
  return (
    <>
      <div className="App">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">Motorlar</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column">
                <Course
                  image={RS200}
                  title="Bajaj Pulsar RS 200"
                  description="HIZ TUTKUNUZUN YENİ PARTNERİ
          Tutkunuzu hızlandıracak, hız tutkunuza partner olacak Pulsar RS 200 ile tanışın. RS 200 ile yolculuklarınız hızlanacak, tutkunuz aşka dönüşecek.
          Pulsar RS 200;"
                />
              </div>
              <div className="column">
                <Course
                  image={D400}
                  title="Bajaj Dominar D 400"
                  description="İKİ TEKERİYLE YOLLARIN TEK HÜKÜMDARI
          Dominar 400 iki tekeri, 40 HP beygir gücü ve 373 cm³ silindir hacmiyle yollarda başka hiçbir hükme yer bırakmıyor."
                />
              </div>
              <div className="column">
                <Course
                  image={R25}
                  title="YAMAHA R25"
                  description="R Dünyası sizi çağırıyor. R25'ün neler yapabildiğini gördüğünüzde aradığınız motosikletin bu olduğunu anlayacaksınız. Yüksek devirli 250 cc motoru, olağanüstü hızlanma sağlar. Ayrıca sınıfının lideri kalitesi, yeni nesil Icon Blue renk düzeni ve agresif tarzıyla R25, Yamaha'nın en iyi hafif Supersport motosikleti olma konumunu doğrular."
                />
              </div>
              <div className="column">
                <Course
                  image={MT25}
                  title="YAMAHA MT-25"
                  description="Yamaha'nın Hyper Naked motosikletleri heyecan yaşatmak için üretilmiştir. Güçlü tarzları ve adrenalin dolu performanslarıyla en çok satan MT modelleri, Avrupa'nın her yerinden sürücülerin gönlünü fethetmiştir. Şimdi ise geliştirilmiş özelliklere ve sokakta güçlü duruşa sahip bir MT-25 var. "
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
