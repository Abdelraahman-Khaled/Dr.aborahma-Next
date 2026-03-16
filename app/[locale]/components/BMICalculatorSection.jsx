"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function BMICalculatorSection() {
    const t = useTranslations('Index');
    const locale = useLocale();
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const translations = {
        en: {
            underweight: "Underweight",
            healthy: "Healthy",
            overweight: "Overweight",
            obese1: "Class I Obesity",
            obese2: "Class II Obesity",
            obese3: "Class III Obesity",
            you: "You",
            heightPlaceholder: "Enter your height (cm)",
            weightPlaceholder: "Enter your weight (kg)",
            calculate: "Calculate",
            table: [
                ["Under 18.5", "Underweight"],
                ["18.5 - 24.9", "Healthy"],
                ["25.0 - 29.9", "Overweight"],
                ["30.0 - 34.9", "Class I Obesity"],
                ["35.0 - 39.9", "Class II Obesity"],
                ["40 or more", "Class III Obesity"]
            ]
        },
        ar: {
            underweight: "وزن ناقص",
            healthy: "وزن صحي",
            overweight: "وزن زائد",
            obese1: "سمنة من الدرجة الأولى",
            obese2: "سمنة من الدرجة الثانية",
            obese3: "سمنة من درجة ثالثة",
            you: "أنت",
            heightPlaceholder: "اكتب طولك (سم)",
            weightPlaceholder: "اكتب وزنك (كجم)",
            calculate: "احسب",
            table: [
                ["أقل من 18.5", "وزن ناقص"],
                ["من 18.5 إلى 24.9", "وزن صحي"],
                ["من 25 إلى 29.9", "وزن زائد"],
                ["من 30 إلى 34.9", "سمنة من الدرجة الأولى"],
                ["من 35 إلى 39.9", "سمنة من الدرجة الثانية"],
                ["من 40 أو أكثر", "سمنة من درجة ثالثة"]
            ]
        }
    };

    const currentT = translations[locale] || translations.en;

    const calculateBMI = (e) => {
        e.preventDefault();
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const bmiValue = (w / (h * h)).toFixed(2);
            let category = '';
            let percentage = 0;

            if (bmiValue < 18.5) {
                category = currentT.underweight;
                percentage = (bmiValue / 18.5) * 16.66;
            } else if (bmiValue < 25) {
                category = currentT.healthy;
                percentage = 16.66 + ((bmiValue - 18.5) / 6.5) * 16.66;
            } else if (bmiValue < 30) {
                category = currentT.overweight;
                percentage = 33.32 + ((bmiValue - 25) / 5) * 16.66;
            } else if (bmiValue < 35) {
                category = currentT.obese1;
                percentage = 49.98 + ((bmiValue - 30) / 5) * 16.66;
            } else if (bmiValue < 40) {
                category = currentT.obese2;
                percentage = 66.64 + ((bmiValue - 35) / 5) * 16.66;
            } else {
                category = currentT.obese3;
                percentage = 83.30 + Math.min(((bmiValue - 40) / 10) * 16.66, 16.7);
            }
            setResult({ bmi: bmiValue, category, percentage });
        }
    };

    return (
        <React.Fragment>
            <div className="hc-appointment-wrapper hc-sections ptb-100" id="calc">
                <div className="container">
                    <div className="hc-appointment-row">
                        <div className="hc-appointmnet-text">
                            <div className="hc-about-top">
                                <span className="sub-title">{t('t5')}</span>
                                <h2 className="hc-about-head">{t('t100')}</h2>
                                <p className="hc-paragraph">{t('t79')}</p>

                                <form className="form" id="bmiForm" onSubmit={calculateBMI}>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder={currentT.heightPlaceholder} 
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                        required 
                                    />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder={currentT.weightPlaceholder}
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                        required 
                                    />
                                    <button type="submit" className="form-control" id="bmi-button">
                                        {currentT.calculate}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="bmi-table">
                            <div className="bmi-head">
                                <i className="fas fa-tachometer-alt"></i>
                                <span>{locale === 'ar' ? 'أقسام مؤشرات الكتلة' : 'BMI Categories'}</span>
                            </div>
                            <ul className="mk-list bmi-list">
                                {currentT.table.map((row, index) => (
                                    <React.Fragment key={index}>
                                        <li>{row[0]}</li>
                                        <li>{row[1]}</li>
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>


                        {result && (
                            <div className="layout" style={{ display: "block" }}>
                                <div className="result">
                                    <i className="fa-solid fa-xmark" onClick={() => setResult(null)}></i>
                                    <div className="result-text">{locale === 'ar' ? 'النتيجة' : 'Result'}</div>
                                    <span className="status">{locale === 'ar' ? 'مؤشر كتلة جسمك:' : 'Your BMI:'} {result.bmi} - {result.category}</span>
                                    <div className="calc_info_line">
                                        <div className="calc_info_line_result_wrapper" style={{ [locale === 'ar' ? 'right' : 'left']: `${result.percentage}%` }}>
                                            <div className="calc_info_line_result">{currentT.you}</div>
                                        </div>
                                        <div className="calc_info_line_underweight calc">{currentT.underweight}</div>
                                        <div className="calc_info_line_healthy calc">{currentT.healthy}</div>
                                        <div className="calc_info_line_overweight calc">{currentT.overweight}</div>
                                        <div className="calc_info_line_obese calc">{currentT.obese}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


