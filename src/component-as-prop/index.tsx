import React from 'react';

const ComponentType = (props: {
  icon: React.ComponentType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.icon className="h-8 w-8" />
    </div>
  );
};

const ElementType = (props: {
  element: React.ElementType<{
    className?: string;
  }>;
}) => {
  return (
    <div>
      <props.element className="h-8 w-8" />
    </div>
  );
};

const UserIcon = ({ className }: { className?: string }) => (
  <div className={className}>User Icon</div>
);

export default function ComponentAsPropPage(): React.ReactElement {
  return (
    <>
      <h1 className="text-2xl font-normal mb-12">Component as Prop</h1>
      <div className="flex flex-col items-start gap-8">
        <div>
          <code className='text-sm text-indigo-500'>React.ComponentType</code>
          <ComponentType icon={UserIcon} />
        </div>
        <div>
          <code className='text-sm text-indigo-500'>React.ElementType</code>
          <ElementType element={UserIcon} />
          <ElementType element={'p'} />
        </div>
      </div>
    </>
  );
}
