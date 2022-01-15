import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import { Loading } from './LoadingComponent';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteMeal } from '../actions/meals';

function RenderDish({ dish }) {
  const user = JSON.parse(localStorage.getItem('profile'));

  const loggedIn = user?.result?.username;
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-5 m-1 mt-4">
      <Card>
        <CardImg
          width="100%"
          src={`/assets/images/${dish.name
            .replace(/\s/g, '')
            .toLowerCase()}.png`}
          alt={dish.name}
        />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        <CardText>{dish.description}</CardText>
        <CardTitle>{dish.price} Kn</CardTitle>
      </Card>
      {loggedIn && (
        <Button
          size="small"
          color="secondary"
          onClick={() => dispatch(deleteMeal(dish.id))}
        >
          <DeleteIcon fontSize="small" /> &nbsp; Delete
        </Button>
      )}
    </div>
  );
}

const Dishdetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }

  if (props.dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
        </div>
      </div>
    );
  }
};

export default Dishdetail;
