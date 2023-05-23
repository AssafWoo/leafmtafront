import { FaTrash } from "react-icons/fa";
import { MainPink, MainRed } from "../../Styles/colors";

export const TransactionManipulation = (data) => {
	if (data === undefined) return data;
	if (data.length === 0) return data;
	const newDataList = data.map((item) => {
		Object.assign(item, {
			date: item.created_at.substr(0, item.created_at.indexOf("T")),
			delete:<FaTrash style={{display:'inline-block', fill:MainPink}} />
		});
		if (item.status === "ACT") {
			return Object.assign(item, {
				status: "Placed",
			});
		}
		if (item.status === "REJ") {
			return Object.assign(item, {
				status: "Rejected",
			});
		}
		if (item.status === "CLE") {
			return Object.assign(item, {
				status: "Retired",
			});
		} else {
			return Object.assign(item, {
				status: "Processing",
			});
		}
	});
	return newDataList;
};

// export const addEditDeleteAttributes = (list, t) => {
//     const newAbsenceList = list.map((item) => {
//       Object.assign(item, {
//         canEmployeeReport: item.canEmpReport === 1 ? t("yes") : t("no"),
//       });
//       Object.assign(item, { isActive: item.active === 1 ? t("yes") : t("no") });
//       if (item.key > 7) {
//         return Object.assign(item, {
//           edit: { type: "edit" },
//           delete: { type: "delete" },
//         });
//       } else {
//         return Object.assign(item, {
//           edit: { type: "edit" },
//         });
//       }
//     });
//     return newAbsenceList;
//   };

//   export const checkIfCurrentEmpty = (obj) => {
//     return Object.keys(obj).length === 0;
//   };
