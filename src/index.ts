const createNoticeBtn = document.getElementById("createNoticeBtn")!;
const addNoticeBtn = document.getElementById("addNoticeBtn");
const deleteBtn = document.getElementsByClassName("delete-btn");
const editBtn = document.getElementsByClassName("edit-btn");
const saveNoticeBtn = document.getElementById("saveNoticeBtn");
const cancelNewNoticeBtn = document.getElementById("cancelNewNoticeBtn");
const cancelEditNoticeBtn = document.getElementById("cancelEditNoticeBtn");

const createNoticeDialogEl = document.getElementById(
  "createNoticeDialog"
) as HTMLDialogElement;
const editNoticeDialogEl = document.getElementById(
  "editNoticeDialog"
) as HTMLDialogElement;

const createNoticeFormEl = (
  document.getElementById("newNoticeForm")! as HTMLFormElement
).elements[0] as HTMLTextAreaElement;

const newNoticeFormErrorEl = document.getElementById("newNoticeFormError")!;

const editNoticeFormEl = (
  document.getElementById("editNoticeForm")! as HTMLFormElement
).elements[0] as HTMLTextAreaElement;

createNoticeBtn?.addEventListener("click", () => {
  console.log("test");
  createNoticeDialogEl.showModal();
});

cancelNewNoticeBtn?.addEventListener("click", () => {
  createNoticeDialogEl.close();
});
cancelEditNoticeBtn?.addEventListener("click", () => {
  editNoticeDialogEl.close();
});

addNoticeBtn?.addEventListener("click", (event) => {
  event.preventDefault();

  const noticeItem = document.createElement("li");
  noticeItem.className = "notice-item";
  const pEl = document.createElement("p");

  let noticeTextValue = createNoticeFormEl.value;

  const noticeTextNode = document.createTextNode(noticeTextValue);
  pEl.appendChild(noticeTextNode);
  noticeItem.appendChild(pEl);

  console.log(noticeItem);

  if (noticeTextValue === "") {
    newNoticeFormErrorEl.className = "form-message-error";
    return;
  } else {
    document.getElementById("noticesList")?.appendChild(noticeItem);
    createNoticeDialogEl.close();
  }

  newNoticeFormErrorEl.className = "";
  createNoticeFormEl.value = "";

  const deleteBtnEl = document.createElement("span");
  const deleteBtnText = document.createTextNode("\u00D7");
  deleteBtnEl.className = "delete-btn";
  deleteBtnEl.appendChild(deleteBtnText);
  noticeItem.appendChild(deleteBtnEl);

  const editBtnEl = document.createElement("span");
  const editBtnText = document.createTextNode("\u270e");
  editBtnEl.className = "edit-btn";
  editBtnEl.appendChild(editBtnText);
  noticeItem.appendChild(editBtnEl);

  let i: number;
  for (i = 0; i < deleteBtn.length; i++) {
    (deleteBtn[i] as HTMLElement).addEventListener("click", function () {
      noticeItem.style.display = "none";
    });

    (editBtn[i] as HTMLElement).addEventListener("click", function () {
      const itemText = pEl.textContent;
      if (itemText !== null) editNoticeFormEl.value = itemText;

      editNoticeDialogEl.showModal();

      saveNoticeBtn?.addEventListener("click", () => {
        const newNoticeTextValue = editNoticeFormEl.value;
        console.log(newNoticeTextValue);

        if (newNoticeTextValue === "") {
          alert("You must write something!");
        } else {
          pEl.textContent = newNoticeTextValue;
        }
      });
    });
  }
});
