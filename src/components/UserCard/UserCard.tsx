import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import userpic from '../../assets/userpic.png';
import './UserCard.scss';

function UserCard() {
  return (
    <Card>
      <CardMedia
        component="img"
        image={userpic}
        alt="Selected contact photo"
        width={200}
      />
      <CardHeader
        title="Anthony H."
        align="center"
      />
      <CardContent>
        <div className="user-information">
          <div className="column titles">
            <span>Name:</span>
            <span>City:</span>
            <span>Email:</span>
            <span>Phone:</span>
          </div>
          <div className="column">
            <span>Anthony H.</span>
            <span>Los Angeles.</span>
            <a href="mailto:a.hill@gmail.com" className="email-link">a.hill@gmail.com</a>
            <span>+1 213 509 6995</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserCard
