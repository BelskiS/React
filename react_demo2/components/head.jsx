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

            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta property="og:title" content={props.title || defaultTitleSite} />
            <meta property="og:description" content={props.description || defaultDescriptionSite} />
            <meta property="og:url" content={props.url || dafaultUrlSite} />

            <link rel="icon" href="/static/favicon/favicon.ico" sizes="any" />
            <link rel="icon" href="/static/favicon/safari-pinned-tab.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/static/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/static/favicon/site.webmanifest" />
            
            
        </NextHead>
    );
}

export default Head;