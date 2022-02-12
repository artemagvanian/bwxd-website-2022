import { InteractiveBackground } from "../components/InteractiveBackground";
import logo from "../assets/logo2019.png";
import { Modal, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import profiles from "../data/speakerbios.json";

export function Home() {
  const [state, setState] = useState({
    show: false,
    name: "",
    pronouns: "",
    company: "",
    website: "",
    bio: "",
    // image is left
  });

  const handleClose = () =>
    setState({
      ...state,
      show: false,
      name: "",
      pronouns: "",
      company: "",
      website: "",
      bio: "",
    });

  const handleShow = (id) =>
    setState({
      ...state,
      show: true,
      name: profiles[id].name,
      pronouns: profiles[id].pronouns,
      company: profiles[id].company,
      website: profiles[id].website,
      bio: profiles[id].bio,
    });

  const renderIndividual = (id) => {
    return (
      <div className="individual" onClick={() => handleShow(id)}>
        <img src={logo} className="pic" />
        <h2 className="name">{profiles[id].name}</h2>
        <p className="pronouns">{profiles[id].pronouns}</p>
        <p className="company">{profiles[id].company}</p>
      </div>
    );
  };

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
  };

  return (
    <div>
      <div className="mainGraphic">
        <div className="mainName">re-frame</div>
      </div>
      <div className="conferenceCaption">
        CAPTION: Knitting together the fabric of our world, seams hold together
        our infrastructure, repair our wounds, and connect us through visible
        and invisible networks. They alert us to the presence of former rifts,
        existing partitions, and opportunities for collective transformation.
        Seams describe the most essential and sometimes the most fragile parts
        of our reality.
        <br></br>
        <b>Date: 23rd-25th August, 2022</b>
      </div>
      <div className="mainGraphic">Schedule</div>

      <div>
        <div className="page-header">
          <h1>2022 Speakers</h1>
        </div>
        <div className="team-row" id="cochairs">
          {renderIndividual(0)}
          {renderIndividual(1)}
          {renderIndividual(2)}
        </div>

        {renderModal()}
      </div>
    </div>
  );
}

export default Home;
