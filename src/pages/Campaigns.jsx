import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MdTimer, MdPhone, MdLocationOn } from "react-icons/md";
import { toggleInterest } from "../store/campaignSlice";
import "./Campaigns.css";

const ngos = [
  { name: "NOSH FOOD RESCUE", location: "Rajpura, Punjab", contact: "+91 98765 43210", time: "9:00 AM - 6:00 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSxTV1x2s2Yf_eAwskTX9lZbbqaablzghDXqlxvjU3g&s=10" },
  { name: "NIWALA", location: "Chandigarh", contact: "+91 99887 77665", time: "10:00 AM - 5:00 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTQDoM6qNawmeFmlHHxP8l4Xp5Z07DGgjrbuwJowoMA&s=10" },
  { name: "Community Kitchen Trust", location: "Patiala", contact: "+91 91234 56789", time: "8:00 AM - 8:00 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMANpkzhmdZFROEACnLDwMqQ_X1lrwkf6c6KVNT0sTO-6Lk3bbcLpXah_Z&s=10" }
];

function Campaigns() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const interested = useSelector((state) => state.campaigns.interested);
  const filteredNgos = useMemo(() => ngos.filter((ngo) => `${ngo.name} ${ngo.location}`.toLowerCase().includes(search.trim().toLowerCase())), [search]);

  return (
    <>
      <div className="campaigns-navbar"><Navbar />
        <main className="campaigns-container">
          <h1 className="campaigns-title">Food Donation <span>Campaigns</span></h1>
          <p className="campaigns-subtitle">Find NGOs and community centers where you can donate surplus food.</p>
          <label className="campaign-search-label" htmlFor="campaign-search">Search campaigns by NGO or location</label>
          <input id="campaign-search" className="campaign-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="e.g. Chandigarh" />
          <p className="campaigns-subtitle" aria-live="polite">{filteredNgos.length} campaign{filteredNgos.length === 1 ? "" : "s"} found · {interested.length} saved</p>
          <div className="ngo-list">
            {filteredNgos.map((ngo) => {
              const saved = interested.includes(ngo.name);
              return <article key={ngo.name} className="ngo-card">
                <div className="ngo-info"><h3>{ngo.name}</h3>
                  <p className="ngo-detail"><strong><MdLocationOn /> Location:</strong> {ngo.location}</p>
                  <p className="ngo-detail"><strong><MdPhone /> Contact:</strong> {ngo.contact}</p>
                  <p className="ngo-detail"><strong><MdTimer /> Donation Time:</strong> {ngo.time}</p>
                  <button type="button" className="campaign-interest" aria-pressed={saved} onClick={() => dispatch(toggleInterest(ngo.name))}>{saved ? "Remove from saved" : "I'm interested"}</button>
                </div><img src={ngo.image} alt={`${ngo.name} campaign`} className="ngo-image" loading="lazy" />
              </article>;
            })}
            {filteredNgos.length === 0 && <p className="campaign-empty">No campaigns match that search. Try another NGO name or location.</p>}
          </div>
        </main>
      </div><Footer />
    </>
  );
}
export default Campaigns;
