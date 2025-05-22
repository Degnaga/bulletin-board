const createNoticeBtn = document.getElementById("createNoticeBtn")!;
const addNoticeBtn = document.getElementById("addNoticeBtn");
const closeBtn = document.getElementsByClassName("close-btn");

const createNoteDialogEl = document.getElementById(
  "createNoteDialog"
) as HTMLDialogElement;

createNoticeBtn?.addEventListener("click", () => {
  console.log("test");
  createNoteDialogEl.showModal();
});

addNoticeBtn?.addEventListener("click", (event) => {
  const noticeItem = document.createElement("li");
  noticeItem.className = "notice-item";
  const qEl = document.createElement("p");
  const noteText = (document.getElementById("newNoteForm")! as HTMLFormElement)
    .elements[0] as HTMLTextAreaElement;

  let noteTextValue = noteText.value;

  event.preventDefault();

  const noteTextNode = document.createTextNode(noteTextValue);
  qEl.appendChild(noteTextNode);
  noticeItem.appendChild(qEl);

  if (noteTextValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("noticesList")?.appendChild(noticeItem);
  }

  noteText.value = "";

  const spanEl = document.createElement("span");
  const spanTextNode = document.createTextNode("\u00D7");
  spanEl.className = "close-btn";
  spanEl.appendChild(spanTextNode);
  noticeItem.appendChild(spanEl);

  let i: number;
  for (i = 0; i < closeBtn.length; i++) {
    (closeBtn[i] as HTMLElement).addEventListener("click", function () {
      const li = this.parentElement!;
      li.style.display = "none";
    });
  }

  createNoteDialogEl.close();
});
