import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type PersonType = {
  id: string;
  firstName: string;
  lastName: string;
};

export async function loader() {
  const data: PersonType[] = [
    { id: "1", firstName: "Abhay", lastName: "Kumar" },
  ];
  return json(data);
}

export default function People() {
  const people = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>People</h1>
      {people.length ? (
        <ul>
          {people.map((person) => (
            <li key={person.id}>{`${person.firstName} ${person.lastName}`}</li>
          ))}
        </ul>
      ) : (
        <p>Nobody here!</p>
      )}
    </main>
  );
}
