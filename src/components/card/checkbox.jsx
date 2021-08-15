import React, { useState, useEffect } from "react";

export const CheckBox = ({ role, allowedRoles, resource, operation, fx }) => {
  const [active, setActive] = useState(allowedRoles.includes(role));

  const handleChange = (e) => {
    // when user moving from checked box to unchecked
    if (active) {
      allowedRoles.push(role);
      const newRolesArray = allowedRoles.filter((item) => item !== role);
      fx(resource, operation, newRolesArray);
    } else {
      // when a role is given new access
      allowedRoles.push(role);
      allowedRoles = [...new Set(allowedRoles)];
      fx(resource, operation, allowedRoles);
    }

    setActive(!active);
  };

  return (
    <div className="ml-auto  ">
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={handleChange}
        checked={active}
      />
    </div>
  );
};
