import React from 'react';

const Table = ({alerts}) => {
  return <table className="table-fixed border-black border-collapse border-2">
    <thead>
      <tr>
        <th className="border border-slate-600">Type</th>
        <th className="border border-slate-600">Tags</th>
        <th className="border border-slate-600">Origin</th>
        <th className="border border-slate-600">Description</th>
        <th className="border border-slate-600">Added date</th>
      </tr>
    </thead>
    <tbody>
      {alerts.map(alert => {
        return  <tr key={alert.id}>
          <td className="border border-slate-700">{alert.type_of}</td>
          <td className="border border-slate-700">{alert.tags.join(' ')}</td>
          <td className="border border-slate-700">{alert.origin}</td>
          <td className="border border-slate-700">{alert.description}</td>
          <td className="border border-slate-700">{new Date(alert.created_at).toLocaleString('en-US')}</td>
        </tr>
      })}
    </tbody>
  </table>
}

export default Table