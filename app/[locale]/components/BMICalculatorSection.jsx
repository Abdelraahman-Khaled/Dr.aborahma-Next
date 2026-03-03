import React from 'react';
import {useTranslations} from 'next-intl';

export default function BMICalculatorSection() {
    const t = useTranslations('Index');
    return (
        <React.Fragment>
            <div className="hc-appointment-wrapper hc-sections ptb-100" id="calc">
      <div className="container">
        <div className="hc-appointment-row">
          <div className="hc-appointmnet-text">
            <div className="hc-about-top">
              <span className="sub-title" id="bmi-subtitle"></span>
              <h2 className="hc-about-head" id="bmi-heading"></h2>
              <p className="hc-paragraph" id="bmi-description"></p>

              <form className="form" id="bmiForm">
                <input type="number" id="height" className="form-control" placeholder="" required="" />
                <input type="number" id="weight" className="form-control" placeholder="" required="" />
                <button type="submit" className="form-control" id="bmi-button"></button>
              </form>
            </div>
          </div>

          <div className="bmi-table">
            <div className="bmi-head">
              <i className="fas fa-tachometer-alt"></i>
              <span id="bmi-table-title"></span>
            </div>
            <ul className="mk-list bmi-list" id="bmi-list"></ul>
            <p className="text-center" id="bmi-note"></p>
          </div>

          <div className="layout" style={{display: "none"}}>
            <div className="result">
              <i className="fa-solid fa-xmark"></i>
              <div className="result-text"></div>
              <span className="status"></span>
              <div className="calc_info_line">
                <div className="calc_info_line_result_wrapper" style={{left: "0"}}>
                  <div className="calc_info_line_result" id="you-label"></div>
                </div>
                <div className="calc_info_line_underweight calc"></div>
                <div className="calc_info_line_healthy calc"></div>
                <div className="calc_info_line_overweight calc"></div>
                <div className="calc_info_line_obese calc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    );
}
