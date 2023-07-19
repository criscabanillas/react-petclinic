import React, { Component } from "react";
import "../../static/css/pricing/pricingPage.css";
import { FaCheck, FaTimes, FaPaperPlane } from "react-icons/fa";
import { ImAirplane } from "react-icons/im";
import { BsFillRocketTakeoffFill, BsDot } from "react-icons/bs";

class PricingPlan extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plan: null,
      message: null,
    };
    this.jwt = JSON.parse(window.localStorage.getItem("jwt"));
  }

  async componentDidMount() {
    const owner = await (
      await fetch(`/api/v1/plan`, {
        headers: {
          Authorization: `Bearer ${this.jwt}`,
        },
      })
    ).json();
    if (owner.message) this.setState({ message: owner.message });
    else this.setState({ owner: owner, plan: owner.clinic.plan });
  }

  async changePlan(event, plan) {
    event.preventDefault();

    await fetch("/api/v1/plan", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.jwt}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    });
    window.location.href = "/plan";
  }

  render() {
    const { plan } = this.state;
    if (this.state.message) {
      return <h2 className="text-center">{this.state.message}</h2>;
    }

    return (
      <div className="pricing-page-container">
        <div>
          <h1 className="pricing-title">My Plan - {plan}</h1>
        </div>
        <div className="section-pricing">
          <div className="pricing-container">
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                  <FaPaperPlane color="white" />
                </div>
                <h2>BASIC</h2>
              </div>
              <div className="plan-price">
                <h4>FREE</h4>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 2 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 1 visit per month and pet
                  </li>
                  <li>
                    <BsDot color="white" /> Low support priority
                  </li>
                  <li>
                    <FaTimes color="red" /> Vet Selection for Visits
                  </li>
                  <li>
                    <FaTimes color="red" /> Calendar with Upcoming Visits
                  </li>
                  <li>
                    <FaTimes color="red" /> Dashboard of your Pets
                  </li>
                  <li>
                    <FaTimes color="red" /> Online Consultation
                  </li>
                </ul>
              </div>
              {plan === "BASIC" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => this.changePlan(e, "BASIC")}> CHANGE </button>
                )}
            </div>
            {/* END Col one */}
            <div className="pricing-card text-center">
              <div className="title">
                <div className="icon">
                  <ImAirplane color="white" />
                </div>
                <h2>GOLD</h2>
              </div>
              <div className="plan-price">
                <h4>5</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 4 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 3 visit per month and pet
                  </li>
                  <li>
                    <BsDot color="white" /> Medium support priority
                  </li>
                  <li>
                    <FaCheck color="green" /> Vet Selection for Visits
                  </li>
                  <li>
                    <FaCheck color="green" /> Calendar with Upcoming Visits
                  </li>
                  <li>
                    <FaTimes color="red" /> Dashboard of your Pets
                  </li>
                  <li>
                    <FaTimes color="red" /> Online Consultation
                  </li>
                </ul>
              </div>
              {plan === "GOLD" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => this.changePlan(e, "GOLD")}> CHANGE </button>
                )}
            
            </div>
            {/* END Col two */}
            <div className="pricing-card text-center">
              <div
                className="title"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="icon">
                  <BsFillRocketTakeoffFill color="white" />
                </div>
                <h2>PLATINUM</h2>
              </div>
              <div className="plan-price">
                <h4>12</h4>

                <h5>€</h5>
              </div>
              <div className="option">
                <ul>
                  <li>
                    <BsDot color="white" /> 7 pets
                  </li>
                  <li>
                    <BsDot color="white" /> 6 visit per month and pet
                  </li>
                  <li>
                    <BsDot color="white" /> High support priority
                  </li>
                  <li>
                    <FaCheck color="green" /> Vet Selection for Visits
                  </li>
                  <li>
                    <FaCheck color="green" /> Calendar with Upcoming Visits
                  </li>
                  <li>
                    <FaCheck color="green" /> Dashboard of your Pets
                  </li>
                  <li>
                    <FaCheck color="green" /> Online Consultation
                  </li>
                </ul>
              </div>
            {plan === "PLATINUM" ? (
                <button disabled> ACTIVE </button>
                ) : (
                <button onClick={(e) => this.changePlan(e, "PLATINUM")}> CHANGE </button>
                )}
            </div>
            {/* END Col three */}
          </div>
        </div>
      </div>
    );
  }
}
export default PricingPlan;
