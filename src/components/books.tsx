import { CloseRounded } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import BookCard, { BookData } from "./bookcard";
import Logo from "./logo";
const coverImg = "/book_cover_avisekh.jpeg";

function Books() {
  const [activeBook, setActiveBook] = useState<null | BookData>(null);

  const [myBooks, setMyBooks] = useState<BookData[]>([
    {
      _id: "1234567890",
      batch: "mission ADRAK",
      cost: 999,
      cover: coverImg,
      name: "Bio Cook",
      writer: "H.C. Sharma",
    },
    {
      _id: "1234567890",
      batch: "Backlog 2.0",
      cost: 450,
      cover: coverImg,
      name: "Physics Book",
      writer: "H.C. Verma",
    },
    {
      _id: "1234567890",
      batch: "Backlog 2.0",
      cost: 450,
      cover: coverImg,
      name: "Physics Book",
      writer: "H.C. Verma",
    },
    {
      _id: "1234567890",
      batch: "Backlog 2.0",
      cost: 450,
      cover: coverImg,
      name: "Physics Book",
      writer: "H.C. Verma",
    },
    {
      _id: "1234567890",
      batch: "Backlog 2.0",
      cost: 450,
      cover: coverImg,
      name: "Physics Book",
      writer: "H.C. Verma",
    },
    {
      _id: "1234567890",
      batch: "Backlog 2.0",
      cost: 450,
      cover: coverImg,
      name: "Physics Book",
      writer: "H.C. Verma",
    },
  ]);
  return (
    <div className="w-full flex grow">
      <div className="px-5 sm:px-10 w-screen py-4 flex flex-col gap-3">
        <div className="font-bold text-xl">My Books </div>
        <div className="p-4 rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
          <div className="flex rounded-sm snap-x snap-mandatory overflow-auto gap-4">
            {myBooks.map((myBook: BookData) => (
              <BookCard setActiveBook={setActiveBook} bookData={myBook} />
            ))}
          </div>
        </div>
        <div className="font-bold text-xl">Backlog 2.0</div>
        <div className="p-4 rounded-3xl bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200">
          <div className="flex rounded-sm snap-x snap-mandatory overflow-auto gap-4">
            {myBooks.map((myBook: BookData) => (
              <BookCard setActiveBook={setActiveBook} bookData={myBook} />
            ))}
          </div>
        </div>
      </div>
      <Modal onClose={() => setActiveBook(null)} open={Boolean(activeBook)}>
        <div className="lg:w-3/5 lg:h-3/4 w-5/6 h-5/6 top-[8vh] left-[8vw] lg:top-[calc(16.6vh)] lg:left-[20vw]  flex justify-between p-2 absolute bg-white rounded-lg">
          <div className="w-full pl-10 flex flex-col gap-5 lg:justify-around items-center">
            <div>
              <Logo size="4xl" color="black" />
            </div>
            <div className="flex grow flex-col lg:flex-row lg:justify-between w-full">
              <div className="px-5 w-full lg:max-w-fit flex justify-center items-center">
                <img
                  className="aspect-[3/4] rounded-lg h-[calc(83.333vh-24rem)] lg:h-[calc(75vh-7.5rem)]"
                  src={activeBook?.cover + ""}
                  alt={"book cover"}
                />
              </div>
              <div className="grow flex flex-col justify-around py-3 lg:py-16">
                <div className="flex grow flex-col gap-4">
                  <div className="text-4xl font-bold">{activeBook?.name}</div>
                  <div className="text-xl font-semibold">
                    -{activeBook?.writer}
                  </div>
                  <div className="text-2xl font-semibold">
                    {activeBook?.batch}
                  </div>
                  <div>
                    <FormControl>
                      <FormLabel
                        sx={{
                          fontSize: 20,
                        }}
                      >
                        Type
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="book-type-radio-buttons-group-label"
                        defaultValue="hard-copy"
                        name="user-type"
                        row
                        onChange={(e) => {
                          //   setSignUpData((pd) => ({
                          //     ...pd,
                          //     userType:
                          //       e.target.value == "student"
                          //         ? "student"
                          //         : "educator",
                          //   }));
                        }}
                      >
                        <FormControlLabel
                          value="hard-copy"
                          control={<Radio />}
                          label={
                            <div>
                              Hard Copy:&nbsp;&nbsp;&nbsp;Rs.
                              {activeBook && activeBook?.cost}
                            </div>
                          }
                        />
                        <FormControlLabel
                          value="pdf"
                          control={<Radio />}
                          label={
                            <div>
                              PDF:&nbsp;&nbsp;&nbsp;Rs.
                              {activeBook && activeBook?.cost / 2}
                            </div>
                          }
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <Button variant="contained" size="large">
                  Buy
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Tooltip placement="right" title={"CLOSE"}>
              <IconButton onClick={() => setActiveBook(null)}>
                <CloseRounded />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Books;
