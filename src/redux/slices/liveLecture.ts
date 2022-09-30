import {
  AnyAction,
  createSlice,
  Reducer,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Peer from "peerjs";
import {
  answerCall,
  initPeer,
  shareScreenStream,
  shareUserStream,
  toggleAudioStream,
  toggleVideoStream,
} from "../../utils/webRTC";

interface Paused {
  video: boolean;
  audio: boolean;
}

interface LecturePeers {
  userPeer?: Peer;
  screenPeer?: Peer;
}

const initialLecturePeers: LecturePeers = {
  userPeer: undefined,
  screenPeer: undefined,
};

interface LectureStreams {
  userStream?: MediaStream;
  screenStream?: MediaStream;
}

const initialLectureStreams: LectureStreams = {
  userStream: undefined,
  screenStream: undefined,
};

export interface LectureData {
  lectureId?: string;
  isAdmin: boolean;
  isPresentationView: boolean;
  isChatOpen: boolean;
  streams: LectureStreams;
}

const initialLectureData: LectureData = {
  lectureId: undefined,
  streams: initialLectureStreams,
  isAdmin: false,
  isPresentationView: false,
  isChatOpen: true,
};

let lecturePeers: LecturePeers = {
  screenPeer: undefined,
  userPeer: undefined,
};

export const lectureSlice: Slice<
  LectureData,
  SliceCaseReducers<LectureData>,
  "lecture"
> = createSlice({
  name: "lecture",
  initialState: initialLectureData,
  reducers: {
    startLecture: (
      state: LectureData,
      action: PayloadAction<{
        lectureId: string;
        userId: string;
        // isAdmin: boolean;
      }>
    ): void => {
      //   state.isAdmin=action.payload.isAdmin;
      //
      lecturePeers.userPeer = new Peer();
      initPeer(lecturePeers.userPeer, "user");
      //
      lecturePeers.screenPeer = new Peer();
      initPeer(lecturePeers.screenPeer, "screen");
      //
      answerCall(state, lecturePeers.userPeer);
    },
    toggleAudio: (state: LectureData, action: PayloadAction<{}>): void => {
      if (state.streams.userStream) {
        toggleAudioStream(state.streams.userStream);
      }
    },
    toggleVideo: (state: LectureData, action: PayloadAction<{}>): void => {
      if (state.streams.userStream) {
        toggleVideoStream(state.streams.userStream);
      }
    },
    shareUser: (
      state: LectureData,
      action: PayloadAction<{ studentPeerId: string }>
    ): void => {
      if (lecturePeers.userPeer) {
        shareUserStream(
          state,
          lecturePeers.userPeer,
          action.payload.studentPeerId
        );
      }
    },
    shareScreen: (
      state: LectureData,
      action: PayloadAction<{ studentPeerId: string }>
    ): void => {
      if (lecturePeers.screenPeer) {
        shareScreenStream(
          state,
          lecturePeers.screenPeer,
          action.payload.studentPeerId
        );
      }
    },
    toggleChat: (state) => {
      state.isChatOpen = !state.isChatOpen;
    },
    toggelPresentationView: (state) => {
      state.isPresentationView = !state.isPresentationView;
    },
  },
});

export const {
  startLecture,
  toggleAudio,
  toggleVideo,
  shareUser,
  shareScreen,
  toggleChat,
  toggelPresentationView,
} = lectureSlice.actions;

const lectureReducer: Reducer<LectureData, AnyAction> = lectureSlice.reducer;
export default lectureReducer;
