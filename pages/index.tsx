import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import Aleem from '../public/profiles/1517517384065.jpeg';
import { useState } from 'react';

const Home: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    function sendMessage() {
        let data: any = { name, email, message };
        fetch('/api/mail', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                // console.log('Response received');
                if (res.status === 200) {
                    setMessageSent(true);
                    // console.log(res.body, 'Response succeeded!');
                    //   setSubmitted(true)
                    //   setName('')
                    //   setEmail('')
                    //   setBody('')
                }
            })
            .catch((err) => console.log(err, 'ERERROR'));
    }
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="COnstructing Company" />
                <meta name="keywords" content="Keywords" />
                <title>GOOD Will Construction</title>

                <link rel="manifest" href="/manifest.json" />

                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-touch-icon.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    href="/icon/icon-192x192.png"
                    sizes="192x192"
                />
                <link
                    rel="apple-touch-icon"
                    href="/icon/apple-touch-icon-180x180.png"
                    sizes="180x180"
                />
                <meta name="theme-color" content="#317EFB" />
                <meta
                    name="msapplication-config"
                    content="/icon/browserconfig.xml"
                />

                <html lang="en" />
            </Head>

            <main className={styles.main}>
                <div className="fixed">
                    <Navbar />
                </div>
                {messageSent && (
                    <div className="bg-green rounded p-12 ">MESSAGE SENT</div>
                )}
                <div className="w-scrren h-screen flex justify-center items-center bg-firstBackground text-logoColor">
                    <div className="p-12 text-center">
                        <h1 className="text-3xl underline ">
                            We Build, Design, Estimate
                        </h1>
                        <p className="text-xs md:text-xl">
                            We are Construction Associates, We Do Building
                            Construction, Structural Design, Interior Design,
                            Estimations, Archetectural Drawings
                            (2D,3D,Elevation,..etc)
                        </p>
                    </div>
                </div>
                <div className="w-scrren h-screen flex flex-col p-12  text-logoColor">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-3xl underline">About Company</h1>
                        <p className="text-center text-xs md:text-xl pt-3">
                            Commitment to our Core Values has made GoodWill
                            Construction the ideal building partner for the
                            region’s most forward-thinking organizations.
                        </p>
                    </div>
                    <div className="flex h-full flex-col items-center mt-3">
                        <h1 className="text-l underline">
                            About CEO &#38; Co.Founder
                        </h1>
                        <div className="md:flex ">
                            <div className="flex justify-center">
                                <div className="w-44 h-6/12  ">
                                    <Image
                                        src={Aleem}
                                        alt="CEO Profile"
                                        className="rounded-full md:rounded md:shadow-xl flex justify-center"
                                    />
                                </div>
                            </div>
                            <p className="md:ml-12 w-full md:w-4/5 text-center text-xs md:text-xl">
                                An ambitious and dedicated Civil Engineer with
                                strong practical and technical skills and a
                                range of experience within construction
                                engineering and project management. Having a
                                sound knowledge of desionsubmitgning, testing
                                and evaluating a design overall effectiveness,
                                cost, reliability and safety.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-scrren h-screen flex pt-6 flex justify-center bg-firstBackground text-logoColor">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-3xl underline">Projects</h1>
                        <div>
                            <div className=" w-full overflow-y-scroll mt-12">
                                <div className="w-96 h-96  bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-scrren h-screen flex justify-center items-center text-logoColor">
                    <div className=" flex flex-col items-center pt-12">
                        <h1 className="text-3xl underline pb-12">Contact US</h1>
                        <div className=" bg-firstBackground rounded shadow-xl">
                            <div className=" pt-4">
                                <div className="w-96 h-96 flex flex-col items-center ">
                                    <p className="mt-2 ml-9 self-start">
                                        Name:
                                    </p>
                                    <input
                                        className="w-80 p-2  rounded"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <p className="mt-2 ml-9 self-start">
                                        Email:
                                    </p>
                                    <input
                                        className="w-80 p-2 rounded"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <p className="mt-2 ml-9 self-start">
                                        Message:
                                    </p>
                                    <div className="w-80 h-24 rounded">
                                        <textarea
                                            className="w-full h-full p-2"
                                            placeholder="Message"
                                            rows={4}
                                            cols={30}
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        />
                                    </div>
                                    <button
                                        className="bg-green-600 p-3 mt-9 rounded-lg text-red-100"
                                        onClick={() => sendMessage()}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
};

export default Home;
