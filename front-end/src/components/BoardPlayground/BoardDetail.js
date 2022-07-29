import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddBoard from './Section/Board/AddBoard';
import AddComment from './Section/Comment/AddComment';
import CommentInput from './Section/Comment/CommentInput';
import ReplyInput from './Section/Reply/ReplyInput';
import { uploadComment, getComment } from 'modules/actions/comment';
import { getBoard } from 'modules/actions/board';
import styled from 'styled-components';
import Reply from 'assests/Reply.png';
import List from 'assests/List.png';
import BoardTitleBox from './Section/Board/BoardTitle';

const boardIdNew = 'quotkaId';
const boardUserNew = 'quotkaUser';
const boardTimeNew = '2022-07-20';
const boardWriterNew = '쿼억하';
const boardTitleNew = 'New Title Test';
const boardContentNew =
  '아빠는 말씀하셨다. 너무 작은 것들까지 사랑하지 말라고. 작은 것들은 하도 많아서 네가 사랑한 그 많은 것들이 언젠간 모두 널 울리게 할 테니까. \n\n 나는 나쁜 아이였나 보다. 아빠가 그렇게 말씀하셨음에도 나는 빨간 꼬리가 예쁜 플라밍고 구피를 사랑했고 비 오는 날 무작정 대한 날 따라왔던 하얀 강아지를 사랑했고 분홍색 끈이 예뻤던 내 여름 샌들을 사랑했으며 크리스마스 선물로 받은 갈색 긴 머리 인형을 사랑했었고, 내 머리를 쓱쓱 문질러대던 아빠의 커다란 손을 사랑했었다. \n\n 그래서 구피가 죽었을 때, 강아지를 잃어버렸을 때, 샌들이 낡아 버려야 했을 때, 이사를 오며 인형을 버렸을 때 그리고, 아빠가 돌아가셨을 때 그때마다 난 울어야 했다. \n\n 아빠 말씀이 옳았다. 내가 사랑한 것들은 언젠간 날 울게 만든다.';
const boardViewCounts = '33';

const commentIdNew = 'commentId';
const commentUserNew = 'commentUser';
const commentTimeNew = '2022-07-21';
const commentWriterNew = 'commentWriter';
const commentContentNew = 'comment content test';

function BoardDetail(props) {
  const dispatch = useDispatch();
  const BoardId = props.match.params.boardId;
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userName');
  const [Comments, setComments] = useState([]);
  const [BoardDetail, setBoardDetail] = useState([]);
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [commentId, getCommentId] = useState('');
  const [Value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const showHandler = () => setShow(!show);
  const onChange = e => {
    setValue(e.currentTarget.value);
  };
  const [CommentsCounts, setCommentsCounts] = useState('');
  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId,
    commentContent: Value,
    commentWriter: BoardWriter,
  };

  const FetchComment = () => {
    dispatch(getComment(variables)).then(response => {
      if (response.payload.success) {
        setComments(response.payload.comments);
        setCommentsCounts(response.payload.commentCounts);
      } else {
        alert('댓글을 보여줄 수 없습니다.');
      }
    });
  };

  useEffect(() => {
    dispatch(getBoard(BoardId)).then(response => {
      if (response.payload.success) {
        setBoardDetail(response.payload.board);
      } else {
        alert('게시글 가져오기에 실패했습니다.');
      }
    });
  }, []);

  useEffect(() => {
    FetchComment();
  }, [CommentsCounts]);

  const onSubmit = e => {
    e.preventDefault();
    if (!Value) {
      alert('댓글을 작성해주세요.');
      return;
    }

    dispatch(uploadComment(variables)).then(response => {
      alert('댓글이 등록되었습니다.');
      setValue('');
      FetchComment();
      window.location.replace(`${location.pathname}`);
    });
  };

  const onRemoveBoard = id => {
    setBoardDetail(BoardDetail.filter(BoardDetail => BoardDetail._id !== id));
    props.history.push('/board'); // 나중에 boardlist로 수정할 부분
  };

  const onRemoveComment = id => {
    setComments(Comments.filter(Comments => Comments._id !== id));
  };

  return (
    <>
      <BoardBox key={props.id}>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to="/playground/boardlist"
        >
          <BoardTitleBox></BoardTitleBox>
        </Link>
        <AddBoard
          id={boardIdNew}
          user={boardUserNew}
          time={boardTimeNew}
          writer={boardWriterNew}
          title={boardTitleNew}
          content={boardContentNew}
          viewCounts={boardViewCounts}
          history={`${props.history}`}
          onRemove={onRemoveBoard}
        />

        <form onSubmit={onSubmit}>
          <CommentInput
            name="Comment"
            placeholder="댓글을 작성해주세요."
            value={Value}
            onChange={onChange}
          />
          <CommentButton type="submit" onClick={onSubmit}>
            작성
          </CommentButton>
        </form>
        {Comments &&
          Comments.map((comment, index) => {
            return (
              <CommentUl key={index}>
                <React.Fragment key={index}>
                  <AddComment
                    id={comment._id}
                    boardId={BoardId}
                    user={comment.userFrom}
                    time={comment.createdAt}
                    writer={comment.commentWriter}
                    content={comment.commentContent}
                    onRemove={onRemoveComment}
                  />
                  <ReplyImg
                    src={Reply}
                    onClick={() => {
                      showHandler();
                      getCommentId(comment._id);
                    }}
                  />
                  <li>
                    {show && comment._id === commentId && (
                      <ReplyInput
                        id={commentId}
                        boardId={BoardId}
                        name="Reply"
                        placeholder="대댓글을 작성해주세요."
                        userFrom={userFrom}
                        writerFrom={writerFrom}
                      />
                    )}
                  </li>
                </React.Fragment>
              </CommentUl>
            );
          })}
      </BoardBox>
    </>
  );
}

export default withRouter(BoardDetail);

const BoardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const CommentButton = styled.button`
  border-radius: 8px;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  width: 70px;
  height: 35px;
  text-align: center;
  background: #c5ad81;
  color: white;
  &:active {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const CommentUl = styled.ul`
  position: relative;
`;

const ReplyImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
`;

const ListImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #eee;
  border-radius: 50px;
`;
