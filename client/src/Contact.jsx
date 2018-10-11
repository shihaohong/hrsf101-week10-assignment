const Contact = props => (
  <div id="contacts">
    <div class="contact">
      <div>
        {props.contact.firstName} {props.contact.lastName}
      </div>
    </div>
  </div>
);
