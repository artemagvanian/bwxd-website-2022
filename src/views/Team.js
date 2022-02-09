import logo from '../assets/logo2019.png';
import { Modal, Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import profiles from '../data/bios.json';

function Team() {
    const [state, setState] = useState({
        show: false,
        name: "",
        committee: "",
        school: "",
        bio: ""
    });

    const handleClose = () => setState({...state, 
        show: false, 
        name: "",
        committee: "",
        school: "",
        bio: ""
    });

    const handleShow = (id) => setState({...state, 
        show: true, 
        name: profiles[0].name,
        committee: profiles[0].committee,
        school: profiles[0].school,
        bio: profiles[0].bio
    });

    const renderIndividual = (id) => {
        return(
            <div className="individual" onClick={() => handleShow(0)}>
                <img src={logo} className="pic" />
                <h2 className="name">{profiles[id].name}</h2>
                <p className="committee">{profiles[id].committee}</p>
                <p className="school">{profiles[id].school}</p>
            </div>
        );
    }

    const renderModal = () => {
        return (
            <Modal show={state.show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{state.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{state.bio}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
		<div>
            <div className="page-header">
                <h1>2022 Committee</h1>
            </div>
            <div className="team-row" id="cochairs">
                {renderIndividual(0)}
                {renderIndividual(1)}
                {renderIndividual(2)}
            </div>

            <div className="team-row" id="content-1">
                {renderIndividual(3)}
                {renderIndividual(4)}
                {renderIndividual(5)}
            </div>

            <div className="team-row" id="content-2">
                {renderIndividual(6)}
                {renderIndividual(7)}
                {renderIndividual(8)}
            </div>

            <div className="team-row" id="dev">
                {renderIndividual(9)}
                {renderIndividual(10)}
                {renderIndividual(11)}
            </div>

            <div className="team-row" id="ops-1">
                {renderIndividual(12)}
                {renderIndividual(13)}
            </div>

            <div className="team-row" id="ops-2">
                {renderIndividual(14)}
                {renderIndividual(15)}
            </div>

            <div className="team-row" id="ce">
                {renderIndividual(16)}
                {renderIndividual(17)}
                {renderIndividual(18)}
            </div>

            <div className="team-row" id="se">
                {renderIndividual(19)}
                {renderIndividual(20)}
                {renderIndividual(21)}
            </div>

            <div className="team-row" id="pr">
                {renderIndividual(22)}
                {renderIndividual(23)}
            </div>

            <div className="team-row" id="graphics">
                {renderIndividual(24)}
                {renderIndividual(25)}
                {renderIndividual(26)}
            </div>

            <div className="team-row" id="web">
                {renderIndividual(27)}
                {renderIndividual(28)}
                {renderIndividual(29)}
            </div>

            {renderModal()}
        </div>
	);
}

export default Team;