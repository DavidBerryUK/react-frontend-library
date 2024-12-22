import type { Meta } from "@storybook/react";
import UIPagination from "../UIPagination";
import React, { useState } from "react";

const meta = {
  title: "UI/UIPagination",
  component: UIPagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "page pagination. use the left and right arrow keys to change the page number, press shift to just by 10 pages, or press control to just to the first or last page.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIPagination>;

export default meta;

export const Default: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Primary: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination primary pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Secondary: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination secondary pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Success: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination success pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Info: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination info pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Warning: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination warning pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};

export const Danger: React.FC = () => {
  const [pageCount] = useState<number>(20);
  const [pageNo, setPageNo] = useState<number>(1);

  const handleOnPagechangedEvent = (value: number) => {
    setPageNo(value);
  };

  return (
    <div>
      <UIPagination danger pageCount={pageCount} page={pageNo} onPageChanged={handleOnPagechangedEvent} />
    </div>
  );
};
