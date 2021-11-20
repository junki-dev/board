import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { Board } from '../types/Board';
import { useMutation, useQuery } from '@apollo/client';

// Board 등록/수정 최상위 태그
const UpdateContainer = styled.div`
  width: 100%;
`;

// Board 등록/수정 제목
const PageTitle = styled.span`
  font-size: 28px;
  font-family: 'InfinitySansBold';
`;

// Board 폼
const FormContainer = styled.form`
  box-shadow: 0px 3px 10px rgb(0, 10, 10, 0.5);
  padding: 18px;
  margin-top: 24px;
`;

// 제목
const TitleContainer = styled.div`
  margin-bottom: 18px;
`;

// 항목 레이블
const Label = styled.label`
  width: 20%;
  font-size: 20px;
  font-family: 'InfinitySansBold';
  margin-bottom: 18px;
`;

// 입력 폼
const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 6px;
  border: none;
  border-radius: 4px;
`;

// 입력 폼 에러 메시지
const ErrorMsg = styled.span`
  font-size: 12px;
  font-family: 'InfinitySansBold';
  color: red;
`;

interface BoardData {
  board: Board;
}

interface CreateBoardInput {
  createBoard: Board;
}

interface UpdateBoardInput {
  updateBoard: boolean;
}

interface BoardForm {
  title: string;
  password: string;
}

const BoardUpdate = () => {
  const { id } = useParams(); // 게시글 번호 파라미터
  const boardNumber = id !== `new` && id ? parseInt(id) : -1; // 게시글 번호 초기화
  const [content, setContent] = useState(``); // 게시글 내용
  const [board, setBoard] = useState<Board>(); // [수정] 게시글 데이터
  const queryBoardData = useQuery<BoardData>(QUERY_BOARD, { variables: { boardNumber: boardNumber } }).data; // 게시글 번호로 게시글 데이터 조회
  const [createBoard] = useMutation<CreateBoardInput>(CREATE_BOARD); // 게시글 등록
  const [updateBoard] = useMutation<UpdateBoardInput>(UPDATE_BOARD); // 게시글 수정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardForm>(); // 게시판 폼 데이터

  const onSubmit = (input: BoardForm) => {
    const newCreateBoard: Board = {
      title: input.title,
      password: input.password,
      content: content,
    };

    if (boardNumber < 0) {
      // 등록의 경우
      createBoard({ variables: { createBoardInput: newCreateBoard } })
        .then(({ data }) => {
          alert(`등록 되었습니다.`);
          if (data && data.createBoard) {
            window.location.href = `/detail/${data.createBoard.boardNumber}`;
          } else {
            window.location.href = `/`;
          }
        })
        .catch((error) => {
          alert(`등록에 실패했습니다. \n ${error}`);
        });
    } else {
      // 수정의 경우
      newCreateBoard.boardNumber = boardNumber;

      updateBoard({ variables: { createBoardInput: newCreateBoard } })
        .then(({ data }) => {
          if (data && data.updateBoard === false) {
            alert(`비밀번호가 틀렸습니다.`);
          } else {
            alert(`수정 되었습니다.`);
            window.location.href = `/detail/${boardNumber}`;
          }
        })
        .catch((error) => {
          alert(`수정에 실패했습니다. \n ${error}`);
        });
    }
  };

  const handleEditorChange = (text: string) => {
    setContent(text);
  };

  useEffect(() => {
    if (id !== `new` && queryBoardData && !board) {
      setBoard(queryBoardData.board);
    }
  }, [id, queryBoardData, board, setBoard]);

  return (
    <UpdateContainer>
      <PageTitle>Register/Update</PageTitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TitleContainer>
          <Label>TITLE</Label>
          <Input
            type="text"
            defaultValue={board && board.title}
            {...register('title', { required: true, maxLength: 250 })}
          />
          {errors.title && errors.title.type === 'maxLength' && <ErrorMsg>Max length exceeded(MAX: 250)</ErrorMsg>}
        </TitleContainer>
        <div>
          <Label>CONTENT</Label>
          <Editor
            apiKey={process.env.REACT_APP_EDITOR_API_KEY}
            initialValue={board && board.content}
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
          <Label>PASSWORD</Label>
          <Input type="number" {...register('password', { required: true, maxLength: 4 })} />
          {errors.password && errors.password.type === 'maxLength' && <ErrorMsg>Max length exceeded(MAX: 4)</ErrorMsg>}
        </div>

        <input type="button" value="BACK" onClick={() => (window.location.href = '/')} className="fill-button" />
        <input type="submit" value="SUBMIT" className="fill-button" />
      </FormContainer>
    </UpdateContainer>
  );
};

// 게시글 상세 조회
const QUERY_BOARD = gql`
  query Board($boardNumber: Int!) {
    board: boardByNumber(boardNumber: $boardNumber) {
      title
      content
    }
  }
`;

// 게시글 수정
const UPDATE_BOARD = gql`
  mutation UpdateBoard($createBoardInput: CreateBoardInput) {
    updateBoard(createBoardInput: $createBoardInput)
  }
`;

// 게시글 등록
const CREATE_BOARD = gql`
  mutation CreateBoard($createBoardInput: CreateBoardInput) {
    createBoard(createBoardInput: $createBoardInput) {
      boardNumber
    }
  }
`;

export default BoardUpdate;
