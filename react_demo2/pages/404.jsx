import React from 'react';
import Head from '@components/head';
import BtnSite from '@components/BtnSite/btnSite';

function Page404() {
    
    return (
        <>
            <Head 
                title="Страница не найдена"
            />

            <div className="site_container">
                <div className="page_404">
                    <div className="page_404__item">
                        <svg viewBox="0 0 620 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M322.542 221.803V306.13H297.458V221.803C301.565 222.358 305.782 222.58 310 222.58C314.218 222.58 318.435 222.358 322.542 221.803Z" fill="#FE7B7B"/>
                            <path d="M331.31 306.13H288.579V320H331.31V306.13Z" fill="#FE7B7B"/>
                            <path d="M322.542 221.803V231.123C318.435 231.567 314.218 231.9 310 231.9C305.782 231.9 301.565 231.678 297.458 231.123V221.803C301.565 222.358 305.782 222.58 310 222.58C314.218 222.58 318.435 222.358 322.542 221.803Z" fill="#FE7B7B"/>
                            <path d="M310 222.58C364.556 222.58 408.783 178.367 408.783 123.828C408.783 69.289 364.556 25.0763 310 25.0763C255.444 25.0763 211.217 69.289 211.217 123.828C211.217 178.367 255.444 222.58 310 222.58Z" fill="#FE7B7B"/>
                            <path d="M301.343 164.993L281.031 206.158C247.068 194.286 222.76 161.886 222.76 123.828C222.76 78.5576 257.279 41.2761 301.454 36.9487L286.137 68.7934L285.249 70.5687L287.025 71.6783L312.775 88.2109L300.788 142.469L300.677 142.691V142.802L301.343 164.993Z" fill="white"/>
                            <path d="M371.489 149.015L394.021 147.351C383.81 184.078 350.068 211.04 310 211.04C301.232 211.04 292.796 209.82 284.916 207.379L303.563 165.77L303.673 165.548V165.326L304.006 154.674L347.071 147.018L347.959 160.999L348.181 165.215L351.511 162.885L371.489 149.015Z" fill="white"/>
                            <path d="M397.24 123.828C397.24 130.264 396.574 136.588 395.242 142.58L370.491 144.355H369.825L369.27 144.688L352.843 156.227L353.731 142.802L353.953 138.363L349.513 139.362L304.006 149.681L304.228 143.024L319.989 87.4341L320.766 84.8821L318.435 83.6616L291.131 68.6824L303.23 36.8377C305.449 36.7268 307.669 36.6158 310 36.6158C358.17 36.6158 397.24 75.6727 397.24 123.828Z" fill="white"/>
                            <path d="M102.112 250.319V200.166H0V158.336L108.217 0H148.396V158.225H179.363V200.166H148.396V250.319H102.112ZM102.112 158.114V72.8987L44.7297 158.114H102.112Z" fill="#FE7B7B"/>
                            <path d="M542.75 250.319V200.166H440.637V158.336L548.854 0H589.033V158.225H620V200.166H589.033V250.319H542.75ZM542.75 158.114V72.8987L485.367 158.114H542.75Z" fill="#FE7B7B"/>
                        </svg>

                        <div className="title_404">Такая страница не найдена</div>
                        <BtnSite 
                            btn_link
                            href="/"
                            text="Перейти на главную"
                        />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Page404;