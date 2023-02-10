import React from "react";
import dropbox from "./assets/dropbox.png";
import googleDrive from "./assets/google-drive.png";
import link from "./assets/link-solid.png";
import {
  Main,
  Icons,
  StepL,
  Step,
  SIcon,
  Button,
  ButtonIcon,
  ButtonP,
  IcomImg,
  P,
} from "./Styles";

export default function Hero() {
  return (
    <div>
      <Main>
        <P>Easily convert to and from PDF in seconds.</P>
        <Button>
          <ButtonIcon>+</ButtonIcon> <ButtonP>Choose a File</ButtonP>
        </Button>
        <Icons>
          <IcomImg src={googleDrive} alt="google-drive" />

          <IcomImg src={dropbox} alt="dropbox" />

          <IcomImg src={link} alt="link" />
        </Icons>
        <h1>How To Convert Files To and From PDF For Free</h1>
        <StepL>
          <Step>
            <SIcon>1</SIcon>
            <p>
              Select the Word, Excel, PowerPoint, PDF or other file you wish to
              convert.
            </p>
          </Step>
          <Step>
            <SIcon>2</SIcon>
            <p>
              Our free PDF creator will convert your document to PDF or from PDF
              in seconds.
            </p>
          </Step>
          <Step>
            <SIcon>3</SIcon>
            <p>
              Your new document will be ready to download immediately. After the
              download is complete, any remaining files uploaded will be purged
              from our server.
            </p>
          </Step>
        </StepL>
      </Main>
    </div>
  );
}
