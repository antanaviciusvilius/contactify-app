import { Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { FunctionComponent } from 'react';
import userpic from '../../assets/userpic.png';
import formatContactName from '../../helpers/formatContactName';
import { Contact } from '../../types/Contact';
import './UserCard.scss';

interface UserCardProps {
  contact: Contact;
}

const UserCard: FunctionComponent<UserCardProps> = ({contact}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={userpic}
        alt="Selected contact photo"
        width={200}
      />
      <CardHeader
        title={formatContactName(contact)}
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
            <span>{formatContactName(contact)}</span>
            <span>{contact.city }</span>
            <a href={`mailto:${contact.email}`} className="email-link">{contact.email}</a>
            <span>{contact.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;

