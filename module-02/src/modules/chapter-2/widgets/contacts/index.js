import React, { useMemo, useState } from "react";
import { AccountLong } from "../components/AccountUI";
import { ButtonIcon, ButtonSearch } from "../components/ButtonUI";
import { Link } from "react-router-dom";
// import "./components/";

export function ContactUI({
  my_account,
  friends,
  selectedUser,
  HandlerSelectedChat,
}) {
  const my_friends = friends;
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });

  const toggleSorting = (field) => {
    if (sorting.field === field) {
      setSorting({
        ...sorting,
        order: sorting.order === "asc" ? "desc" : "asc",
      });
    } else {
      setSorting({
        field: field,
        order: "asc",
      });
    }
  };

  const ResultData = useMemo(() => {
    let computedData = my_friends;

    if (search) {
      computedData = computedData.filter((listData) => {
        return Object.keys(listData).some((key) =>
          listData[key].toString().toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedData = computedData.sort(
        (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
      );
    }

    return computedData;
  }, [my_friends, search, sorting]);

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-light py-3">
        <div className="card-title d-flex align-items-center gap-2">
          <AccountLong data={my_account} color={"danger"} />
        </div>
        <div className="card-toolbar">
          <Link
            to={"/sign-out"}
            className="btn btn-outline-danger btn-sm rounded-circle"
            title="Sign out"
          >
            <i className="bi bi-box-arrow-right fs-5"></i>
          </Link>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="border-bottom p-3">
          <div className="d-flex gap-2 align-items-center">
            <ButtonSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            >
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3">
                <i className="bi bi-search text-muted"></i>
              </span>
            </ButtonSearch>
            <ButtonIcon
              title={`Sort ${sorting.order}`}
              onAction={() => toggleSorting("name")}
              className="btn btn-light btn-sm rounded-circle"
            >
              <i className="bi bi-filter fs-5"></i>
            </ButtonIcon>
          </div>
        </div>

        <div
          className="friends-list overflow-auto"
          style={{ maxHeight: "calc(100vh - 280px)" }}
        >
          {Object.values(ResultData).length > 0 ? (
            ResultData.map((v, index) => (
              <div
                className={`friend-item p-3 border-bottom hover-bg-light cursor-pointer ${
                  selectedUser?.id === v.id ? "bg-light" : ""
                }`}
                key={index}
                onClick={() => HandlerSelectedChat(v)}
              >
                <AccountLong data={v} color={"danger"}  />
              </div>
            ))
          ) : (
            <div className="text-center p-4 text-muted">No Data Found!</div>
          )}
        </div>

        <div className="border-top p-3">
          <p className="text-center text-muted small mb-0">
            <i className="bi bi-lock-fill me-1"></i>
            Your personal messages are{" "}
            <span className="text-primary">end-to-end encrypted</span>
          </p>
        </div>
      </div>
    </div>
  );
}
