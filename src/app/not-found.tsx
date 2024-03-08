interface NotFoundProps {
  message?: string; 
}

const NotFound: React.FC<NotFoundProps> = () => {
  return <div className="min-h-screen">Not Found</div>;
};

export default NotFound;
