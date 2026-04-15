
import { Archive, Bell, MessageCircle, Phone, Trash, Video } from "lucide-react";
import P_card from "../Components/P_card";
import P_count_cards from "../components/P_count_cards";




const Profile = async({params}) => {
     const {friendsid}=await params;
    const res=await fetch("http://localhost:3000/friends.json")
    const data= await res.json();

    const friend=data.find(f=>f.id==friendsid)
    
    return (
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-6 p-5 items-start bg-gray-100">

  
  <div className="md:col-span-2 space-y-6">

    <P_card friend={friend} />

    
<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Bell /> Snooze
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2">
    <Archive /> Archive
  </h2>
</div>

<div className="bg-white rounded-xl shadow p-4 space-y-3 text-center">
  <h2 className="font-semibold text-lg flex items-center justify-center gap-2 text-red-600">
    <Trash /> Delete
  </h2>
</div>
  

  </div>

  
  <div className="md:col-span-4 space-y-6">

    <P_count_cards friend={friend} />

    
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
      <div className="py-12">
        <h2 className="font-semibold text-lg">Relationship Goal</h2>
        <p className="opacity-60">Connect every <span className="font-bold opacity-100">30 days</span></p>
      </div>
      <button className="btn text-black bg-gray-100 border-0">
        Edit
      </button>
    </div>

    {/* Extra*/}
   <div className="bg-white rounded-xl shadow p-5 space-y-4">

  <h2 className="font-semibold text-lg">Quick Check-In</h2>




</div>

  </div>

</div>
    );
};

export default Profile;