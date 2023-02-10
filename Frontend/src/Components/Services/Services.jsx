import React from "react";
import pdf from "./assets/pdf.png";
import styled from "styled-components";

export default function Services() {
  let servicelist = [
    {
      id: 1,
      icon: pdf,
      name: "The Best Free PDF Converter",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
    {
      id: 2,
      icon: pdf,
      name: "Start a free trial",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
    {
      id: 3,
      icon: pdf,
      name: "Save & secure PDF files",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
    {
      id: 4,
      icon: pdf,
      name: "Automatic deletion of your files",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
    {
      id: 5,
      icon: pdf,
      name: "Edit PDF files online for free",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
    {
      id: 6,
      icon: pdf,
      name: "A suite of helpful file conversion tools",
      description:
        "No matter what types of files you need to convert, our online file converter is more than just a PDF file converter. It’s the go-to solution for all of your file conversion needs",
    },
  ];
  /**
   * make six cards
   * each card should have an icon, heading and description
   * there should be a section tag wrapping all the cards
   * this section tag should have 70% width
   * each card should have a width of 30%
   * each card should have a height of 200px
   * each card should have a border of 1px solid #e6e6e6
   * each card should have a border radius of 0.3em
   * each card should have a margin of 0.5em
   * each card should have a padding of 0.5em
   * each card should have a box shadow of 0 0 0.5em #e6e6e6
   * there will be 2 rows of cards
   * the first row will have 3 cards
   * the second row will have 3 cards
   * the card are not in the center of the page
   * the cards should be in the center of the page
   * how can i do that
   *
   */
  const SSection = styled.section`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `;
  const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 200px;
    border: 1px solid #e6e6e6;
    border-radius: 0.3em;
    margin: 0.5em;
    padding: 0.5em;
    box-shadow: 0 0 0.5em #e6e6e6;
  `;
  const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Sicon = styled.img`
    width: 50px;
    height: 50px;
  `;
  const SHeading = styled.h3`
    font-size: 1.2em;
    font-weight: 600;
    margin: 0.5em 0;
  `;
  const SDescription = styled.p`
    font-size: 0.9em;
    font-weight: 400;
    text-align: center;
  `;

  return (
    <SSection>
      {servicelist.map((service) => {
        return (
          <CardSection>
            <Service className="service" key={service.id}>
              <Sicon src={service.icon} alt="" />
              <SHeading>{service.name}</SHeading>
              <SDescription>{service.description}</SDescription>
            </Service>
          </CardSection>
        );
      })}
    </SSection>
  );
}
