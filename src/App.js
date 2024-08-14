import './App.css';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

function App() {
    return (
        <div className="App h-full overflow-x-hidden font-satoshi">
            <header>

            </header>

            <nav>

            </nav>

            <div id={"bg-1"} className={"flex flex-col"}>
                <div id={"homePage"}
                     className={"bg-[url('../public/illustration/frontpage-pc.png')] bg-cover bg-no-repeat bg-top"}>
                    <div className={"h-screen w-screen flex flex-row p-16 md:p-32"}>
                        <div id={"left"} className={"m-auto md:m-16 md:w-1/2"}>
                            <div className={"md:text-left text-white"}>
                                <h2 className={"text-5xl font-bold mb-3 drop-shadow-lg"}>IGNITION HACKS</h2>
                                <h4 className={"text-3xl font-semibold mb-6 drop-shadow-lg"}>Online Hackathon / August
                                    16-18, 2024</h4>
                                <a href={"/"}>
                                    <button type="button"
                                            className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-bold text-xl rounded-lg px-5 py-2.5 text-center drop-shadow-lg"
                                            disabled>Registration Closed
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div id={"wereBack"} className={"h-1/2 flex items-center justify-center"}>

                        <img src={"/illustration/back.png"} alt={"were back"} className={"hidden md:block"}/>
                        <img src={"/illustration/back-mobile.png"} alt={"were back"} className={"md:hidden"}/>

                        {/*<img src={"/illustration/back.png"} alt={"were back"} className={""}/>*/}
                        {/*<div className={"bg-cover bg-no-repeat bg-top h-1/2 bg-blue-50 rounded-3xl m-52"}>*/}
                        {/*    <div className={""}>*/}
                        {/*        <div className={"h-12 rounded-t-3xl bg-indigo-400"}>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <h3>We're back!</h3>*/}
                        {/*            <p>Ignition Hacks is a <span*/}
                        {/*                className={"font-black"}>36-hour online hackathon</span> that*/}
                        {/*                focuses on the intersection between <span className={"font-black"}>business and technology</span>.*/}
                        {/*                It is a fun-filled event featuring awesome prizes, SWAG, engaging workshops, and*/}
                        {/*                more!*/}
                        {/*            </p>*/}

                        {/*        </div>*/}


                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>


                </div>
            </div>


            <div id={"section2"}
                 className={"bg-[url('../public/illustration/clouds-283.png')] bg-cover bg-no-repeat bg-top h-[60rem] md:h-[96rem] lg:h-[125rem]"}>

                <div id={"faq-accordion"} className={"flex h-full w-screen text-sky-950"}>
                    <Accordion allowToggle
                               className={"w-10/12 md:w-3/5 text-left overflow-x-hidden m-auto bg-white p-6 px-4 md:p-14 rounded-3xl"}>
                        <div className={"flex"}>
                            <h2 className={"hidden md:flex m-auto text-4xl font-bold mb-12 tracking-tight"}>FREQUENTLY
                                ASKED
                                QUESTIONS</h2>
                            <h2 className={"m-auto text-4xl font-bold mb-3 tracking-tight md:hidden"}>FAQ</h2>
                        </div>
                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        How many people can be on a team?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                There can be 1-4 members on a team! Feel free to go solo, or collaborate with
                                other hackers to create a project.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        What if I don't have a team?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                No worries at all! Many participants go into a hackathon looking for team
                                members. We will have a team finding channel in our Discord server, and a
                                networking portion for the in-person component for you to connect with other
                                hackers.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        How much does it cost to attend?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Attending Ignition Hacks is completely free. Zero dollars! We will cover all
                                costs. Your only job is to hack, and have lots of fun! Leave the rest to us.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        Is there a theme for projects?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                We do not have a specific theme at Ignition Hacks, however, we are a
                                business-tech hackathon, which means your pitch, idea, and technical demo are
                                all equally valuable. We also offer specific prize tracks which will be listed
                                closer to the event date, so if you’re stuck on project ideas, you can refer to
                                those!
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        How long will the hackathon last?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                The hackathon will last from Friday, August 16th to Sunday, August 18th. Hacking
                                will be strictly 36 hours.
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        Who can participate?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Anyone from middle school to undergraduate students are welcome to compete!
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        What if I've never been to a hackathon before?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Ignition Hacks aims to help people from a variety of technical backgrounds and
                                experiences. We are beginner friendly, and strive to reduce the barrier of entry
                                to technology (including having a best beginner hack award). We will provide
                                lots of resources including workshops, activities, and mentors for you to have
                                one of the best hackathon experiences possible!
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-2 md:p-4"}>
                                        What if I have more questions?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Shoot us an email at info@ignitionhacks.com or message us on Instagram at
                                @ignitionhacks and we’d be more than happy to answer your questions!
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    {/*</div>*/}
                </div>
            </div>


            <div id={"apply"}
                 className={"bg-[url('../public/illustration/applytoday.png')] bg-cover bg-no-repeat bg-top h-[25rem] -mt-64 md:h-[42rem] xl:h-[58rem] md:-mt-96"}>
                {/*<img src="/illustration/applytoday.png" className={"invisible"} alt={"bg"}/>*/}
                <div className={"flex w-screen h-full"}>
                    <div className={"flex flex-col m-auto text-sky-950 gap-y-2"}>
                        <h2 className={"text-3xl md:text-5xl font-black tracking-tight"}>APPLY TODAY!</h2>
                        <h4 className={"text-xl md:text-2xl font-medium"}>Applications are due by August 3rd, 2024</h4>
                        <button
                            className={"text-white bg-blue-400 dark:bg-blue-500 font-bold text-lg md:text-xl rounded-lg px-5 py-2.5 text-center sm:w-3/5 md:w-2/5 mx-auto"}>
                            <span>Register Here</span></button>
                    </div>
                </div>
            </div>

            <div id={"joinUs"}
                 className={"md:bg-[url('../public/illustration/cloud-blue-bg.png')] bg-cover bg-no-repeat bg-top h-[55rem] -mt-52 md:h-[110rem] lg:h-[120rem] md:-mt-48 lg:-mt-64"}>
                <br/>
                <div
                    className={"bg-[url('../public/illustration/stars.png')] hidden md:flex bg-cover bg-no-repeat bg-top md:h-[92rem] lg:h-[105rem] mt-32"}>
                </div>
                <div
                    className={"bg-[url('../public/illustration/stars-mobile.png')] md:hidden bg-cover bg-no-repeat bg-top h-[55rem] mt-24"}>
                </div>
            </div>

            <div id={"footerSection"}
                 className={"bg-[url('../public/illustration/cloud-white-bg.png')] bg-cover bg-no-repeat bg-top h-[90rem] md:h-[140rem] md:-mt-64 lg:-mt-[26rem]"}>
                <br/>
                <div id={"sponsors"} className={"w-screen flex flex-col gap-y-12 mt-[16rem] md:mt-[32rem] mb-32"}>
                    <div>
                        <h2 className={"text-5xl font-black tracking-tight"}>OUR SPONSORS</h2>
                    </div>
                    <div className={"w-4/5 md:w-3/5 m-auto"}>
                        <div className={"flex flex-col"}>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 mb-4 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/BEST_BUY.png" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 mb-4 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/GAR.png" alt={""} className={"object-scale-down mx-auto"}/>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 gap-4 place-items-center"}>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/CERTOPUS.svg" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/IGDA.png" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/INTERVIEW_BUDDY.png" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/NORDVPN.png" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/OREILLY.png" alt={""}
                                    className={"object-scale-down mx-auto"}/>
                            </div>
                            <div
                                className={"bg-white border-2 rounded-3xl border-blue-300 md:mb-8 shadow-xl h-[10rem] md:h-[14rem] w-full flex p-8"}>
                                <img
                                    src="/illustration/logos/XYZ.png" alt={""} className={"object-scale-down mx-auto"}/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div id={"throwBack"} className={"flex flex-col w-screen "}>
                <div className={"m-auto w-4/5 h-[42rem] sm:h-[64rem]"}>
                    <h2 className={"text-3xl sm:text-5xl font-black tracking-tight mb-12"}>THROW BACK ~ IGNITION
                        V.4!</h2>
                    <div className={"h-[30rem] md:h-[52rem] shadow-xl flex flex-col rounded-3xl"}>
                        <div className={"flex flex-col"}>
                            <div
                                className={"text-left bg-indigo-400 text-white rounded-t-3xl my-auto font-black text-3xl sm:text-4xl p-3 sm:p-5"}>
                                <h3>2023</h3></div>
                            <div className={"m-4 sm:m-16 h-[36rem]"}>
                                <img src={"/illustration/us/i miss this.jpg"} alt={"Humi office"}
                                     className={"rounded-3xl max-h-[32rem] w-full object-cover"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id={"aboutUs"} className={"mb-32 flex"}>
                <div className={"m-auto w-2/3"}>
                    <h2 className={"text-5xl font-black tracking-tight mb-7"}>WHO ARE WE?</h2>
                    <p className={"text-2xl font-medium"}>Founded in 2019, Ignition Hacks is a student-led
                        organization that focuses on bridging
                        technology and business. We are a team of coding-ninjas and business-savvy students that
                        is dedicated to bringing an amazing online hackathon to you!</p>
                </div>
            </div>

            <div id={"ourTeam"} className={""}>
                <div className={""}>
                    <h2 className={"text-5xl font-black tracking-tight mb-7"}>OUR TEAM</h2>
                </div>
                <div className={"flex flex-col mx-auto  sm:w-3/5 gap-y-8"}>
                    <div id={"dir"} className={"flex flex-wrap justify-center gap-7"}>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={"size-36"}>
                                <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}
                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={"size-36"}>
                                <img src={"/headshots/avery.jpeg"} alt={"headshot"}
                                     className={"rounded-xl object-cover size-36"}/>

                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/behzad.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/carrie.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/christine.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/daisy.png"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/emily.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/emma.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/franklin.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/huyen.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/kelvin.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/kevin.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/matthew.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/meganli.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/melissa.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/nilgun.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/rachel.jpeg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}><img src={"/headshots/sohaila.jpg"} alt={"headshot"}
                                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                        <div
                            className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                            <div className={""}>
                                <img src={"/headshots/thomas.jpeg"} alt={"headshot"}
                                     className={"rounded-xl object-cover size-36"}/>
                            </div>
                            <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                            <h5 className={"-mt-2"}>Director</h5>
                            <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                        </div>
                    </div>
                    <div id={"log"} className={"flex flex-wrap justify-center gap-7"}>


                    </div>
                    {/*<div id={"fin"}>*/}
                    {/*    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>*/}
                    {/*    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>*/}
                    {/*    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>*/}
                    {/*    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>*/}
                    {/*    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>*/}

                    {/*</div>*/}
                    {/*<div id={"mar"}>*/}

                    {/*</div>*/}
                    {/*<div id={"ui/ux"}>*/}

                    {/*</div>*/}
                </div>

            </div>


            <div className={"bg-[url('../public/illustration/footer.png')] bg-cover bg-no-repeat bg-top h-[32rem]"}>
                <div className={"flex h-[32rem]"}>
                    <div className={"mx-auto mt-64 flex flex-col gap-y-4"}>
                        <div className={""}>
                            {/*<img/>*/}
                            <h3 className={"text-4xl text-white font-black drop-shadow-lg"}>Ignition Hacks</h3>
                        </div>
                        <div id={"icons"}>

                        </div>
                        <h5 className={"text-white drop-shadow-lg"}>© 2024 Ignition Hacks. All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
