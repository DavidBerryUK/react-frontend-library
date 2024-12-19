import type { Meta, StoryObj } from "@storybook/react";
import UIPagination from "../UIPagination";
import React, { useState } from "react";

const meta = {
  title: "UI/UIPagination",
  component: UIPagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "page pagination",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UIPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDefault: Story = {
  args: {
    page: 1,
    pageCount: 20,
  },
};

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
