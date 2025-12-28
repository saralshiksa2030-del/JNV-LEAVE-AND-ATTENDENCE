import React from 'react';
import { Users, CheckCircle, AlertTriangle, Activity } from 'lucide-react';

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
      <p className={`text-xs mt-2 ${color}`}>{subtext}</p>
    </div>
    <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
  </div>
);

export default function PrincipalDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">JNV Dashboard</h1>
          <p className="text-gray-500">Overview for District: Kamrup Metro</p>
        </div>
        <button className="bg-blue-800 text-white px-4 py-2 rounded shadow hover:bg-blue-900">
          Download Daily Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Students" 
          value="542" 
          subtext="100% Capacity" 
          icon={Users} 
          color="text-blue-600" 
        />
        <StatCard 
          title="Present Today" 
          value="512" 
          subtext="94.4% Attendance" 
          icon={CheckCircle} 
          color="text-green-600" 
        />
        <StatCard 
          title="On Leave" 
          value="24" 
          subtext="6 Returning Today" 
          icon={Activity} 
          color="text-amber-600" 
        />
        <StatCard 
          title="Pending Approvals" 
          value="8" 
          subtext="Action Required" 
          icon={AlertTriangle} 
          color="text-red-600" 
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-6">
        {/* Attendance by House Table */}
        <div className="col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-lg mb-4 text-slate-800">Attendance by House</h3>
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">House</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Present</th>
                <th className="px-4 py-3">Absent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 font-medium text-blue-800">Nilgiri</td>
                <td className="px-4 py-3">120</td>
                <td className="px-4 py-3 text-green-600">115</td>
                <td className="px-4 py-3 text-red-500">5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-green-800">Arawali</td>
                <td className="px-4 py-3">140</td>
                <td className="px-4 py-3 text-green-600">138</td>
                <td className="px-4 py-3 text-red-500">2</td>
              </tr>
              {/* Other rows... */}
            </tbody>
          </table>
        </div>

        {/* Quick Actions Panel */}
        <div className="col-span-1 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-lg mb-4 text-slate-800">Quick Actions</h3>
            <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 border rounded hover:bg-gray-50 flex items-center">
                    Approve Leave Requests
                </button>
                <button className="w-full text-left px-4 py-3 border rounded hover:bg-gray-50 flex items-center">
                    Bulk Import Students
                </button>
                <button className="w-full text-left px-4 py-3 border rounded hover:bg-gray-50 flex items-center">
                    Configure Hostels
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
