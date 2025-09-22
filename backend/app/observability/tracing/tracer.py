from opentelemetry import trace
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import (
    OTLPSpanExporter,
)


def setup_tracing(app=None):

    provider = TracerProvider()

    processor = BatchSpanProcessor(
        OTLPSpanExporter(
            endpoint="http://localhost:4318/v1/traces"
        )
    )

    provider.add_span_processor(processor)

    trace.set_tracer_provider(provider)