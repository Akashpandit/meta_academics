import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi'
import './achieverComponent.css'
const AchieverComponent = ({ id }) => {

    const [achiever, setAchiever] = useState();
    const fetchAchieverDetail = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_BASEURL}/api/achiever/achiever/${id}`)
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    useEffect(() => {
        fetchAchieverDetail().then((data) => {
            setAchiever(data.achiever);

        })
    }, [])


    return (
        <div className='event_detail_container'>
            {achiever && (
                <div>
                    <h4>Achievers</h4>

                    <div className="achiever_detail_container"
                        style={{
                            display: "flex",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            justifyContent: "center"

                        }}>
                        <div className="image_container">
                            <img src={achiever.achieverImg} alt="" style={{ maxWidth: "90vw", borderRadius: "10px" }} />
                        </div>

                        <div className="outer">
                            <div className="position_col"><GiPodiumWinner size={"50px"} /></div>
                            <div className="name_col">
                                <div>
                                    {achiever.winner}
                                </div>
                                <div style={{ fontSize: "12px" }}>

                                    {achiever.winnerBatch}
                                </div>

                            </div>
                            <div className="shape_1"></div>
                        </div>
                        {achiever.runnerUp === '' ? ("") : (
                            <div className="outer">
                                <div className="position_col"><GiPodiumSecond size={"50px"} /></div>
                                <div className="name_col">
                                    <div>

                                        {achiever.runnerUp}
                                    </div>
                                    <div style={{ fontSize: "12px" }}>


                                        {achiever.runnerUpBatch}
                                    </div>
                                </div>
                                <div className="shape_1"></div>
                            </div>
                        )}
                        {achiever.secondRunnerUp === '' ? ("") : (
                            <div className="outer">
                                <div className="position_col">


                                    <GiPodiumThird size={"50px"} />
                                </div>
                                <div className="name_col">
                                    <div>
                                        {achiever.secondRunnerUp}
                                    </div>
                                    <div style={{ fontSize: "12px" }}>
                                        {achiever.secondRunnerUpBatch}
                                    </div>
                                </div>
                                <div className="shape_1"></div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AchieverComponent