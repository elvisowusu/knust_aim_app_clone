export const PersonalDetails = () => {
  const items = [
    { name: "Surname", detail: "OWUSU", state: "disabled" },
    { name: "Other Name(s)", detail: "Elvis Gyasi", state: "disabled" },
    { name: "Birth Date", detail: "Friday, March 3, 2000", state: "disabled" },
    { name: "Gender", detail: "Male", state: "disabled" },
    {
      name: "School Email Address",
      detail: "egowusu4@st.knust.edu.gh",
      state: "disabled",
    },
    { name: "KNUST Mobile Number", detail: "0507493459", state: "disabled" },
    {
      name: "Other Email Address",
      detail: "owusuelvisgyasi@gmail.com",
      state: "enabled",
    },
    { name: "Primary Phone Number", detail: "0552778748", state: "enabled" },
    { name: "Country", detail: "Ghana", state: "disabled" },
    { name: "Other Phone Number", detail: "0552778748", state: "enabled" },
    { name: "Residential Address 1", detail: "NUMBER 12", state: "enabled" },
    {
      name: "Residential Address 2",
      detail: "BUADE 4TH LINK",
      state: "enabled",
    },
    { name: "Residential Address 3", detail: "NUNGUA-ACCRA", state: "enabled" },
    { name: "Residential Address 4", detail: "GHANA", state: "enabled" },
    {
      name: "Postal Address 1",
      detail: "KWADWO OTCHERE-DUAH",
      state: "enabled",
    },
    { name: "Postal Address 2", detail: "P.O.BOX 112", state: "enabled" },
    { name: "Postal Address 3", detail: "EJISU-ASHANTI", state: "enabled" },
    { name: "Postal Address 4", detail: "GHANA", state: "enabled" },
    { name: "Region", detail: "ASHANTI", state: "enabled" },
    { name: "Religion", detail: "Christian", state: "enabled" },
    {
      name: "Denomination/Group",
      detail: "Love Economy Church",
      state: "enabled",
    },
  ];
  return (
    <form className="py-[0.5rem] xl:pt-[1.2rem] font-Rubik text-[0.85rem] grid gap-x-[1.5rem] grid-flow-row xl:grid-cols-2">
      {items.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-[0.3rem] mb-[1rem]">
            <label htmlFor="" className="text-[#898e92]">
              {item.name}
            </label>
            <input
              className={`border border-[#ced4da] pl-[1rem] rounded-[0.2rem] h-[2.3rem] focus:border-[#b3c8f3] outline-none disabled:bg-[#eff2f7]`}
              type="text"
              name={item.name}
              id=""
              value={item.detail}
              disabled={item.state === "disabled"}
            />
          </div>
        );
      })}
    </form>
  );
};
