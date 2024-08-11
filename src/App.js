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
                        <div className={"bg-cover bg-no-repeat bg-top h-1/2 bg-blue-50 rounded-3xl m-52"}>
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
            </div>


            <div id={"section2"}
                 className={"bg-[url('../public/illustration/clouds-283.png')] bg-cover bg-no-repeat bg-top"}>
                <img src="/illustration/clouds-283.png" className={"invisible"} alt={"bg"}/>

                <div id={"faq"} className={""}>

                    <div id={"accordion"} className={"flex justify-center items-center"}>
                        <Accordion allowToggle className={"w-1/2 text-left"}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
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
                    </div>
                </div>
            </div>


            {/*<div id={"apply"}>*/}
            {/*    <div className={"bg-[url('../public/illustration/applytoday.png')] bg-cover bg-no-repeat bg-top"}>*/}
            {/*        <img src="../public/illustration/applytoday.png" className={"invisible"} alt={"bg"}/>*/}
            {/*        <div className={"h-screen"}>*/}
            {/*            <div>*/}
            {/*                <h2>APPLY TODAY!</h2>*/}
            {/*                <h5>Applications are due by August 3rd, 2024</h5>*/}
            {/*                <button><span>Register Here</span></button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

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
