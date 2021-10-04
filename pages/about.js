import Head from "next/head";

const about = () => {
    return (
    <>
        <Head>
            <title>My List | About</title>
            <meta name="keywords" content='people'/>
        </Head>

        <div>
            <h1>About</h1>
            <p>This application is made using next.js</p>
        
        </div>
    </>
    );
}
 
export default about;