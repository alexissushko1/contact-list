//Worked on Contact List WS w/Joy, Kristen, Blake, Bertha, and Alexis


export default function ContactRow({ setSelectedContactId, contact}) {

return (
<tr onClick = {() => {
  setSelectedContactId(contact.id);
  }}>
  <td>{contact.name}</td>
  <td>{contact.email}</td>
  <td>{contact.phone}</td>
</tr>

);

}