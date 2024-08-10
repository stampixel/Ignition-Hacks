import './App.css';

function App() {
    return (
        <div className="App h-full overflow-x-hidden ">
            <header>

            </header>

            <nav>

            </nav>

            <div id={"bg-1"} className={"flex flex-col"}>
                <div id={"homePage"}
                     className={"bg-[url('../public/illustration/frontpage-pc.png')] bg-cover bg-no-repeat bg-top "}>
                    <div className={"h-screen w-screen flex flex-row p-32 pb-72"}>
                        <div id={"left"} className={"w-1/2"}>
                            <div className={"text-left text-white"}>
                                <h2 className={""}>Ignition Hacks</h2>
                                <h4>Online Hackathon / August 16-18, 202</h4>
                                <button>REGISTER HERE</button>
                            </div>

                        </div>

                        <div className={"w-1/2"}>

                        </div>
                    </div>

                    <div id={"wereBack"} className={"h-screen flex items-center justify-center"}>
                        <div className={"bg-cover bg-no-repeat bg-top h-1/2 m-auto bg-blue-50 rounded-3xl m-52"}>
                            <div className={""}>
                                <div className={"h-12 rounded-t-3xl bg-indigo-400"}>

                                </div>
                                <div>
                                    <h3>We're back!</h3>
                                    <p>Ignition Hacks is a <span
                                        className={"font-black"}>36-hour online hackathon</span> that
                                        focuses on the intersection between <span className={"font-black"}>business and technology</span>.
                                        It is a fun-filled event featuring awesome prizes, SWAG, engaging workshops, and
                                        more!
                                    </p>

                                </div>


                            </div>
                            {/*<div>*/}
                            {/*    <img src={""} alt={""}/>*/}
                            {/*</div>*/}
                        </div>
                    </div>


                </div>

                <div id={"section2"} className={"bg-[url('../public/illustration/clouds-283.png')] bg-cover bg-no-repeat bg-top "}>
                    <div id={"faq"} className={"h-screen"}>
                        <div>



                        </div>


                    </div>

                </div>

            </div>


            <div id={"wereBack"}>

            </div>

            <div id={"faq"}>

            </div>

            <div id={"apply"}>

            </div>

            <div id={"joinUs"}>

            </div>

            <div id={"lastYear"}>

            </div>

            <div id={"sponsors"}>

            </div>

            <div id={"throwBack"}>

            </div>

            <div id={"aboutUs"}>

            </div>

            <div id={"ourTeam"}>

            </div>

            <footer>

            </footer>
        </div>
    );
}

export default App;
