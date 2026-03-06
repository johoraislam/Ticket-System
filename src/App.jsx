import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import { toast } from "react-toastify";


function App() {

  // AllTicketsState
  const [allTickets, setAllTickets] = useState([]);

  // SelectedTicketState
  const [selectedTickets, setSelectedTickets] = useState([]);

  // ResolvedTicketsState
  const [resolvedTicketsCount, setResolvedTicketsCount] = useState([]);

  useEffect(() => {
    // Fetching data from local JSON file
    fetch("tickets.json")
      .then((response) => response.json())
      .then((data) =>setAllTickets(data))
      .catch((error) => console.error("Error fetching tickets:", error));
  }, []);

  // HandleSelectedTicketState
  const handleSelectedTickets = (ticket) => {
    const isExisting = selectedTickets.filter((t) => t.id === ticket.id);
    if (isExisting.length === 0) {
      setSelectedTickets([...selectedTickets, ticket]);
      toast.success("Ticket added to Task Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      setSelectedTickets(selectedTickets.filter((t) => t.id !== ticket.id));
      toast.error("Ticket removed from Task Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  }

  return (
    <>
      <Header />
      <Banner inProgressCount={selectedTickets.length} resolvedTicketsCount={resolvedTicketsCount.length} />


      {/* ToastContainer */}
      <ToastContainer />
    </>
  )
}

export default App
