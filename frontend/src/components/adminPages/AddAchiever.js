import React, { useState } from 'react'
import { Box, Typography, TextField, InputLabel, Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


const AddAchiever = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        winner: "",
        winnerBatch: "",
        runnerUp: "",
        runnerUpBatch: "",
        secondRunnerUp: "",
        secondRunnerUpBatch: "",
        achieverImg: ""


    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const sendRequest = async () => {
        const res = await axios
            .post(`${process.env.REACT_APP_BASEURL}/api/achiever/addachiever`, {
                winner: inputs.winner,
                winnerBatch: inputs.winnerBatch,
                runnerUp: inputs.runnerUp,
                runnerUpBatch: inputs.runnerUpBatch,
                secondRunnerUp: inputs.secondRunnerUp,
                secondRunnerUpBatch: inputs.secondRunnerUpBatch,
                achieverImg: "https://drive.google.com/uc?export=view&id=" + inputs.achieverImg,
                event: localStorage.getItem("eventId")

            })
            .catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest()
            .then(() => navigate("/admin/home"))
            .then(() => {
                localStorage.removeItem("eventId")
                localStorage.removeItem("eventName")
            })
    }



    return (
        <div >
            <form onSubmit={handleSubmit}>

                <Box
                    borderRadius={2}
                    display="flex"
                    flexDirection={"column"}
                    width="80%"
                    margin={"auto"}
                    marginTop={2}
                    marginBottom={2}
                >

                    <Typography variant='h5'>Add Achiever: {localStorage.getItem("eventName")}</Typography>
                    <InputLabel style={{ marginTop: "1rem" }}><b>Winner</b></InputLabel>

                    <div className="achiever_container" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <div>
                            <TextField
                                name="winner"
                                variant="outlined"
                                placeholder="Name"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"

                            />
                        </div>

                        <div>
                            <TextField
                                name="winnerBatch"
                                variant="outlined"
                                placeholder="Batch (Ex: 2019-2023)"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                            />
                        </div>

                    </div>
                    <InputLabel style={{ marginTop: "1rem" }} ><b>Runner Up</b></InputLabel>

                    <div className="achiever_container" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <div>
                            <TextField
                                name="runnerUp"
                                variant="outlined"
                                placeholder="Name"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"

                            />
                        </div>

                        <div>
                            <TextField
                                name="runnerUpBatch"
                                variant="outlined"
                                placeholder="Batch (Ex: 2019-2023)"
                                value={inputs.value}
                                onChange={handleChange}
                                required="true"
                            />
                        </div>

                    </div>
                    <InputLabel style={{ marginTop: "1rem" }} ><b>Second Runner Up</b></InputLabel>

                    <div className="achiever_container" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <div>
                            <TextField
                                name="secondRunnerUp"
                                variant="outlined"
                                placeholder="Name"
                                value={inputs.value}
                                onChange={handleChange}

                            />
                        </div>

                        <div>
                            <TextField
                                name="secondRunnerUpBatch"
                                variant="outlined"
                                placeholder="Batch (Ex: 2019-2023)"
                                value={inputs.value}
                                onChange={handleChange}

                            />
                        </div>

                    </div>
                    <InputLabel style={{ marginTop: "1rem" }} ><b>Poster Id</b></InputLabel>
                    <TextField
                        name="achieverImg"
                        variant="outlined"
                        placeholder="Google Drive poster Id"
                        value={inputs.value}
                        onChange={handleChange}

                    />
                    <Box>
                        <Button

                            sx={{
                                marginTop: 2,
                                borderRadius: 2,
                                backgroundColor: "#0000ff",
                                width: "30px",

                            }}
                            variant="contained"

                            type="submit"
                        >Add</Button>
                        <Button

                            sx={{
                                marginTop: 2,
                                borderRadius: 2,
                                width: "30px",
                                marginLeft: 1
                            }}
                            variant="outlined"
                            color='error'
                            LinkComponent={Link}
                            to="/admin/home"

                        >Cancel</Button>
                    </Box>
                </Box>


            </form>
        </div >
    )
}

export default AddAchiever