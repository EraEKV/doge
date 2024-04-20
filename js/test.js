// export const links = () => {
//     console.log("TEST")
// }

// .style.filter = "invert(100%) sepia(100%) saturate(2%) hue-rotate(229deg) brightness(105%) contrast(101%)"

// fetch('/advices').then(res => {
//     if(!res.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return res.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log("Error occur:", err)
// })





// const { default: puppeteer } = require('puppeteer')

// const pupeteer = require('puppeteer')

// try {
//     (async () => {
//         const browser = await puppeteer.launch()
//         const page = await browser.newPage()
//         await page.goto('https://basepaws.com/dog-breeds')
        
//     })
// } catch (err) {
//     console.log(err)
// }


// const url = "https://basepaws.com/_next/data/8V1wN0avkGiiToX9DZPuK/dog-breeds.json";

// const headers = {
//     ':authority': 'basepaws.com',
//     ':method': 'GET',
//     ':path': '/_next/data/8V1wN0avkGiiToX9DZPuK/dog-breeds.json',
//     ':scheme': 'https',
//     'Accept': '*/*',
//     'Accept-Encoding': 'gzip, deflate, br, zstd',
//     'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
//     'Baggage': 'sentry-environment=vercel-production,sentry-release=132be576b6f4376fa0d33c61c1cd2665c0464cb4,sentry-public_key=bcc897309221eb3284d8e4d3112239fd,sentry-trace_id=a5cc1b38eca844898ea00824f42ec45b,sentry-sample_rate=1,sentry-transaction=%2Fdog-breeds,sentry-sampled=true',
//     'Cookie': '_gcl_au=1.1.1462872231.1713079984; _gid=GA1.2.1990363874.1713079985; _tt_enable_cookie=1; _ttp=8XMgS0S0emvrEzSkrv2fS6COtgn; _fbp=fb.1.1713079985670.2004062496; FPID=FPID2.2.uQ2UNTghIMvZbu1W8bPX9oqp5OL1ltttoTRVs4PIn1g%3D.1713079985; FPLC=ecioQjBPjLRwHqcj2VzI%2FhOn1PJtwlWx3UfXeTgL%2BVlHfCx5Mdjfq4soA44xjSc%2FfpZN6JjHLZ0ZeSyttawEXKVBAsg0buq9Jqmu%2F31jE0sWHB3rVWXwen%2Bel%2BOwOQ%3D%3D; addshoppers.com=2%7C1%3A0%7C10%3A1713079986%7C15%3Aaddshoppers.com%7C44%3AN2FkY2IyMWIyYTI5NDFlMTkyMDI3ZjE4NjU0MzZlYWY%3D%7C46c30bf5ddec5f35cf913738e3ad51ec7d14eff9fedf6bc7e9f57698c18401f8; _ga=GA1.2.1241679025.1713079985; _uetsid=3b52a6a0fa3111eeb8be27064c49c012; _uetvid=3b52a780fa3111ee880f79407128a0d3; __kla_id=eyJjaWQiOiJNakV6WldabE9XVXRNREppWmkwMFlUZzBMV0V4WmpVdE9XWTFNVFl5T1RGa00yVmwiLCIkcmVmZXJyZXIiOnsidHMiOjE3MTMwNzk5ODUsInZhbHVlIjoiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8iLCJmaXJzdF9wYWdlIjoiaHR0cHM6Ly9iYXNlcGF3cy5jb20vZG9nLWJyZWVkcyJ9LCIkbGFzdF9yZWZlcnJlciI6eyJ0cyI6MTcxMzA4MDI1MCwidmFsdWUiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyIsImZpcnN0X3BhZ2UiOiJodHRwczovL2Jhc2VwYXdzLmNvbS9kb2ctYnJlZWRzIn19; _ga_JGMLZ4ZPLF=GS1.1.1713079984.1.1.1713080811.60.0.0; _ga_TD86QT372C=GS1.1.1713079984.1.1.1713080811.0.0.70838099',
//     'If-None-Match': 'W/"t8z1pdlzwzenpu"',
//     'Purpose': 'prefetch',
//     'Referer': 'https://basepaws.com/dog-breeds',
//     'Sec-Ch-Ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
//     'Sec-Ch-Ua-Mobile': '?0',
//     'Sec-Ch-Ua-Platform': '"Windows"',
//     'Sec-Fetch-Dest': 'empty',
//     'Sec-Fetch-Mode': 'cors',
//     'Sec-Fetch-Site': 'same-origin',
//     'Sentry-Trace': 'a5cc1b38eca844898ea00824f42ec45b-a201a2d39b9a9abf-1',
//     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
//     'X-Nextjs-Data': '1'
// };

// fetch(url, { headers })
//     .then(res => {
//         // Check if the response is successful (status 200)
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         // Parse the response body as JSON
//         return res.json();
//     })
//     .then(data => {
//         // Handle the JSON data here
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Fetch error:', error);
//     });





