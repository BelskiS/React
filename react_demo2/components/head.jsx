import NextHead from 'next/head';

const defaultTitleSite = "e-comAUTOPARTS";
const defaultDescriptionSite ="Компания e-comAUTOPARTS специализируется на оптовой и розничной продаже автозапчастей. За время работы у нас сложились партнерские отношения с ведущими производителями, позволяющие предлагать высококачественную продукцию по конкурентоспособным ценам.";
const dafaultUrlSite = "https://shop.e-comexpert.ru/";

function Head(props) {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{props.title || defaultTitleSite}</title>
            <meta 
                name="description"
                content={props.description || defaultDescriptionSite} />

            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta property="og:title" content={props.title || defaultTitleSite} />
            <meta property="og:description" content={props.description || defaultDescriptionSite} />
            <meta property="og:url" content={props.url || dafaultUrlSite} />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
            <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#e31d23" />
            <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        </NextHead>
    );
}

export default Head;