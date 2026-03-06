import { Suspense, useEffect, useState } from "react";
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import {ToastContainer, toast } from "react-toastify";
import Tickets from "./components/Tickets/Tickets";
import Loader from "./components/Loader/Loader";


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
    const isExisting = selectedTickets.some((t) => t.id === ticket.id);
    if (!isExisting) {
      setSelectedTickets([...selectedTickets, ticket]);
      toast.success("Ticket added to Task Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.warn("Ticket is already in Task Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  }

  // HandleResolvedTicketState
  const handleResolvedTickets = (ticket) => {
    const isExisting = resolvedTicketsCount.some((t) => t.id === ticket.id);
    if (!isExisting) {
      setResolvedTicketsCount([...resolvedTicketsCount, ticket]);
      toast.success("Ticket added to Resolved Status!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      toast.warn("Ticket is already in Resolved Status!", {
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
      <Suspense fallback={<Loader></Loader>}>
        <Tickets
        allTickets={allTickets}
        handleSelectedTicket={handleSelectedTickets}
        selectedTickets={selectedTickets}
        handleResolvedTicket={handleResolvedTickets}
        resolvedTicketsCount={resolvedTicketsCount}
      />
      </Suspense>


      {/* ToastContainer */}
      <ToastContainer />
    </>
  )
}

export default App
