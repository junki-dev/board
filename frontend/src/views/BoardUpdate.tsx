import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import { useParams } from 'react-router';

const UpdateContainer = styled.div`
  width: 100%;
`;

const PageTitle = styled.span`
  font-size: 28px;
  font-family: 'InfinitySansBold';
`;

const FormContainer = styled.form`
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  padding: 18px;
  margin-top: 24px;
`;

const TitleContainer = styled.div`
  margin-bottom: 18px;
`;

const Label = styled.label`
  width: 20%;
  font-size: 20px;
  font-family: 'InfinitySansBold';
  margin-bottom: 18px;
`;

const Title = styled.input`
  width: 100%;
  font-size: 20px;
  font-family: 'InfinitySansReg';
  border: none;
  border-radius: 4px;
`;

const Button = styled.input`
  border: none;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  font-family: 'InfinitySansBold';
  display: inline-block;
  float: right;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #e0ded8;
  color: black;
  border: 2px solid #9e9a9a;

  :hover {
    background-color: #4caf50;
    color: white;
  }
`;

const ContentContainer = styled.div``;

const BoardUpdate = () => {
  const { id } = useParams();

  const handleEditorChange = (content: string) => {
    console.log('Content was updated:', content);
  };

  const goHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    if (id === `new`) {
    } else {
    }
  }, [id]);
  return (
    <UpdateContainer>
      <PageTitle>Register/Update</PageTitle>
      <FormContainer>
        <TitleContainer>
          <Label>TITLE</Label>
          <Title type="text" name="title" />
        </TitleContainer>
        <ContentContainer>
          <Label>CONTENT</Label>
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            init={{
              skin: 'snow',
              icons: 'thin',
              height: 300,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen textcolor ',
                'insertdatetime media table paste code help wordcount',
              ],
              textcolor_rows: '4',
              toolbar:
                'undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
              content_style:
                'body { background-color: white; font-family:InfinitySansReg,Arial,sans-serif; font-size:14px; }',
            }}
            onEditorChange={handleEditorChange}
            outputFormat="html"
          />
        </ContentContainer>

        <Button type="button" value="BACK" onClick={goHome} />
        <Button type="submit" value="SUBMIT" />
      </FormContainer>
    </UpdateContainer>
  );
};

export default BoardUpdate;
