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
                    <div className={"h-screen w-screen flex flex-row p-32 pb-72"}>
                        <div id={"left"} className={"w-1/2"}>
                            <div className={"text-left text-white"}>
                                <h2 className={"text-5xl font-bold mb-3"}>IGNITION HACKS</h2>
                                <h4 className={"text-3xl font-semibold mb-6"}>Online Hackathon / August 16-18, 2024</h4>
                                <a href={"/"}>
                                    <button type="button"
                                            className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-bold text-xl rounded-lg px-5 py-2.5 text-center"
                                            disabled>Registration Closed
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div className={"w-1/2"}>

                        </div>
                    </div>

                    <div id={"wereBack"} className={"h-screen flex items-center justify-center"}>

                        <img src={"/illustration/back.png"} alt={"were back"}/>
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
                 className={"bg-[url('../public/illustration/clouds-283.png')] bg-cover bg-no-repeat bg-top md:h-[96rem]"}>

                <div id={"faq-accordion"} className={"flex h-full w-screen text-sky-950"}>
                    <Accordion allowToggle className={"w-3/5 text-left overflow-x-hidden m-auto bg-white p-16 rounded-3xl"}>
                        <div className={"flex"}>
                            <h2 className={"m-auto text-4xl font-bold mb-12"}>Frequently Asked Questions</h2>
                        </div>
                        <AccordionItem className={'border-dashed'}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' className={"p-4"}>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        Who can participate?
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Anyone from middle school to undergraduate students are welcome to compete!
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
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
                 className={"bg-[url('../public/illustration/applytoday.png')] bg-cover bg-no-repeat bg-top md:h-[42rem] xl:h-[58rem] md:-mt-96"}>
                {/*<img src="/illustration/applytoday.png" className={"invisible"} alt={"bg"}/>*/}
                <div className={"flex w-screen h-full"}>
                    <div className={"flex flex-col m-auto text-sky-950 gap-y-2"}>
                        <h2 className={"text-5xl font-black tracking-tight"}>APPLY TODAY!</h2>
                        <h4 className={"text-2xl font-medium"}>Applications are due by August 3rd, 2024</h4>
                        <button className={"text-white bg-blue-400 dark:bg-blue-500 font-bold text-xl rounded-lg px-5 py-2.5 text-center w-2/5 mx-auto"}><span>Register Here</span></button>
                    </div>
                </div>
            </div>

            <div id={"joinUs"}
                 className={"bg-[url('../public/illustration/cloud-blue-bg.png')] bg-cover bg-no-repeat bg-top md:h-[110rem] lg:h-[120rem] md:-mt-48 lg:-mt-64"}>
                <br/>
                <div
                    className={"bg-[url('../public/illustration/stars.png')] bg-cover bg-no-repeat bg-top md:h-[92rem] lg:h-[105rem] mt-32"}>

                </div>
            </div>

            <div id={"footerSection"}
                 className={"bg-[url('../public/illustration/cloud-white-bg.png')] bg-cover bg-no-repeat bg-top md:h-[300rem] md:-mt-64 lg:-mt-80"}>
                <br/>
                <div id={"sponsors"} className={"w-screen flex mt-72 mb-32"}>
                    <div className={"w-3/5 m-auto"}>
                        <div className={"flex flex-col"}>
                            <div className={"bg-white border-2 rounded-md border-black mb-8"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"w-1/2 m-auto p-8"}/>
                            </div>
                            <div className={"bg-white border-2 rounded-md border-black mb-8"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"w-1/2 m-auto p-8"}/>
                            </div>
                        </div>
                        <div className={"grid grid-cols-2 gap-6 place-items-center"}>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                            <div className={"bg-white border-2 rounded-md border-black"}><img
                                src="/illustration/logos/BEST_BUY.png" alt={""} className={"p-8"}/></div>
                        </div>
                    </div>
                </div>

                <div id={"throwBack"} className={"flex flex-col w-screen "}>
                    <div className={"m-auto w-4/5 h-[64rem] "}>
                        <h1>
                            Throwback to Ignition Hacks v4!
                        </h1>
                        <div className={"h-[52rem] shadow-xl flex flex-col rounded-3xl"}>
                            <div className={"flex flex-col"}>
                                <div
                                    className={"text-left bg-indigo-400 text-white rounded-t-3xl my-auto font-black text-4xl p-5"}>
                                    <h3>2023</h3></div>
                                <div className={"m-16 h-[36rem]"}>
                                    <img src={"/illustration/us/i miss this.jpg"} alt={"Humi office"}
                                         className={"rounded-3xl max-h-[32rem] w-full object-cover"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id={"aboutUs"} className={"mb-32 flex"}>
                    <div className={"m-auto w-3/5"}>
                        <h1>Who Are We?</h1>
                        <p>Founded in 2019, Ignition Hacks is a student-led organization that focuses on bridging
                            technology and business. We are a team of coding-ninjas and business-savvy students that
                            is dedicated to bringing an amazing online hackathon to you!</p>
                    </div>
                </div>

                <div id={"ourTeam"} className={""}>
                    <div>
                        <h1>Our Team</h1>
                    </div>
                    <div className={"flex flex-col mx-auto w-3/5 gap-y-8"}>
                        <div id={"dir"} className={"flex flex-wrap justify-center gap-7"}>
                            <div
                                className={"flex flex-col h-[18rem] w-[12rem] gap-y-2 border-2 border-blue-300 rounded-xl p-6 items-center shadow-lg text-slate-700"}>
                                <img src={"/headshots/jasmine.jpeg"} alt={"headshot"} className={"rounded-xl"}/>
                                <h4 className={"text-xl font-bold"}>Jasmine Xu</h4>
                                <h5 className={"-mt-2"}>Director</h5>
                                <a href={"google.com"}><img src={"/linkedin.png"} alt={"social"} className={"w-6"}/></a>
                            </div>
                        </div>
                        <div id={"log"} className={"flex flex-wrap justify-center gap-7"}>
                            <div id={"dir"} className={"flex flex-wrap justify-center gap-5"}>
                                <div className={"flex flex-col h-[12rem] w-[8rem] gap-y-1"}>
                                    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>
                                    <h4>Name</h4>
                                    <h5>Role</h5>
                                    <a href={"google.com"}><img src={""} alt={"social"}/></a>
                                </div>
                            </div>
                            <div id={"dir"} className={"flex flex-wrap justify-center gap-5"}>
                                <div className={"flex flex-col h-[12rem] w-[8rem] gap-y-1"}>
                                    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>
                                    <h4>Name</h4>
                                    <h5>Role</h5>
                                    <a href={"google.com"}><img src={""} alt={"social"}/></a>
                                </div>
                            </div>
                            <div id={"dir"} className={"flex flex-wrap justify-center gap-5"}>
                                <div className={"flex flex-col h-[12rem] w-[8rem] gap-y-1"}>
                                    <img src={"/headshots/jasmine.jpeg"} alt={"headshot"}/>
                                    <h4>Name</h4>
                                    <h5>Role</h5>
                                    <a href={"google.com"}><img src={""} alt={"social"}/></a>
                                </div>
                            </div>

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

            </div>


            <div className={"bg-[url('../public/illustration/footer.png')] bg-cover bg-no-repeat bg-top h-[36rem]"}>
                <div>
                    <div>
                        {/*<img/>*/}
                        <h3>Ignition Hacks</h3>
                    </div>
                    <div id={"icons"}>

                    </div>
                    <h5>© 2024 Ignition Hacks. All Rights Reserved</h5>

                </div>


            </div>
        </div>
    );
}

export default App;
